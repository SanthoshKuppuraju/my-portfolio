import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import "../Styles/skills.css";

const skills = [
  { name: "React JS", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <Row className="g-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={6} md={3}>
              <motion.div
                className="skill-card"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
