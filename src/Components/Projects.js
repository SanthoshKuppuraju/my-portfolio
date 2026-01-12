import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../Styles/projects.css";

const projects = [
  {
    title: "E-Commerce Dynamic Website",
    description:
      "A fully functional e-commerce website built with React. Includes product listing, cart functionality, home and shop pages with dynamic UI interactions.",
    tech: ["React", "Redux", "JavaScript", "CSS", "Bootstrap"],
    github: "https://github.com/SanthoshKuppuraju",
    demo: "https://drive.google.com/file/d/1_nw1ihVAj8ND-mh2psCzJCk2uTf8xRb6/view?usp=sharing",
  },
  {
    title: "Weather App",
    description:
      "A dynamic weather application that fetches real-time weather data using the OpenWeather API and displays current conditions based on city search.",
    tech: ["React", "JavaScript", "API"],
    github: "https://github.com/SanthoshKuppuraju",
    demo: "https://weather-app-dynamic.vercel.app/",
  },
  {
    title: "Furniture Store Website",
    description:
      "A static furniture store website built using HTML and CSS. Includes multiple pages such as home, store, cart, and contact sections.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/SanthoshKuppuraju",
    demo: "",
  },
  {
    title: "Personal Portfolio – React & UI Design",
    description:
      "A personal portfolio website built using React to showcase projects, skills, and experience. Designed with modern UI patterns, glassmorphism effects, smooth animations, and a fully responsive layout.",
    tech: ["React", "CSS", "Bootstrap", "Framer Motion"],
    github: "https://github.com/SanthoshKuppuraju",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <motion.h2
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                className="project-card"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 180 }}
              >
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <Button
                    variant="outline-light"
                    size="sm"
                    href={project.github}
                    target="_blank"
                  >
                    <FaGithub /> Code
                  </Button>

                  {project.demo && (
                    <Button
                      variant="outline-light"
                      size="sm"
                      href={project.demo}
                      target="_blank"
                    >
                      <FaExternalLinkAlt /> Demo
                    </Button>
                  )}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
