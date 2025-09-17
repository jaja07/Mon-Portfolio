import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "eMnIA",
    description: "A web application providing assistance to kinesitherapists in the establishment of BDK.",
    image: "/projects/eMnIA1.png",
    tags: ["FastAPI", "MongoDB", "OpenCV", "MediaPipe", "Yolov11", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/jaja07/PING-35",
  },
  {
    id: 2,
    title: "RFID Machine Learning",
    description:
      "Predicting and verifying the contents of boxes as they move along conveyor belts.",
    image: "/projects/rfid.png",
    tags: [
      "Scikit Learn",
      "Python",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "C#",
      "Flask",
      "ASP.NET",
      "JavaScript",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/jaja07/Projet-S8",
  },
  {
    id: 3,
    title: "Gocod",
    description:
      "Developer assistance tool for creating projects from templates and a questionnaire.",
    image: "/projects/project3.png",
    tags: ["FastAPI", "MongoDB", "Neo4j", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/jaja07/Gocod",
  },
  {
    id: 4,
    title: "WebScraping",
    description:
      "Web application for comparing football jersey prices on three websites: Nike, Unisport, and Foot.fr",
    image: "/projects/webscraping.png",
    tags: ["Flask", "Scrapy", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/jaja07/WebScrapingV2"
  },
  {
    id: 5,
    title: "Diabetes Prediction",
    description:
      "End-to-end machine learning project to predict the likelihood of diabetes based on user-provided health data",
    image: "/projects/portfolio.png",
    tags: ["Flask", "Scikit Learn", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/jaja07/Diabetes-Prediction"
  },
  {
    id: 6,
    title: "MLOPs Project",
    description:
      "End-to-end MLOps project for training, deploying, and monitoring a machine learning model using CI/CD pipelines and Docker.",
    image: "/projects/mlops.jpg",
    tags: ["Docker", "MLflow", "DVC", "Machine Learning", "CI/CD", "GitHub Actions", "FastAPI", "AWS ECS"],
    demoUrl: "#",
    githubUrl: "https://github.com/jaja07/mlops-project"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={project.id + '-' + idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jaja07"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};