import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

// La liste des titres reste la même.
const rotatingTitles = [
  "Jarfino HOUNGBADJI",
  "an AI Engineer",
  "a Software Engineer",
  "a machine learning Engineer",
  "a data scientist",
];

export const HeroSection = () => {
  // --- Nouveaux états pour gérer l'animation de frappe ---
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300); // Vitesse initiale de frappe

  // --- Constantes pour les vitesses et la pause ---
  const typingSpeed = 150; // Vitesse de frappe en ms
  const deletingSpeed = 100; // Vitesse de suppression en ms
  const pauseDuration = 2000; // Pause à la fin d'un mot

  // --- Le useEffect qui gère toute la logique ---
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]); // L'effet se redéclenche quand `text` est mis à jour.

  const tick = () => {
    let i = loopNum % rotatingTitles.length;
    let fullText = rotatingTitles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // --- Logique de vitesse et de changement d'état (sans accélération) ---

    // Cas 1: Le mot est entièrement tapé -> On fait une pause.
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseDuration);
    }
    // Cas 2: Le mot est entièrement supprimé -> On passe au mot suivant.
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    }
    // Cas 3: On est en train de supprimer -> Vitesse de suppression constante.
    else if (isDeleting) {
      setDelta(deletingSpeed);
    }
    // Note: La vitesse de frappe est gérée dans le cas 2.
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>

            {/* Le span affiche maintenant le texte géré par notre logique. */}
            {/* La classe `wrap` est pour le curseur clignotant (voir CSS). */}
            <span className="text-primary wrap">
              {" "}
              {text}
            </span>
          </h1>

          {/* <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm an AI & ML engineer. I'm passionate about building machine
            learning and AI based solutions.
          </p> */}

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

