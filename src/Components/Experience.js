import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Styles/experience.css";

const experience = [
  {
    role: "Associate",
    company: "Visionet Systems, Bangalore",
    duration: "Oct 2024 – Dec 2025",
    points: [
      "Handled and documented client requirements by reviewing business needs and specifications.",
      "Coordinated with cross-functional teams to ensure smooth execution of assigned tasks.",
      "Maintained clear communication between clients and internal teams to avoid gaps.",
      "Tracked progress and supported timely delivery, strengthening coordination and time management skills.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <motion.h2
          className="experience-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="experience-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="experience-header">
                  <h3>{item.role}</h3>
                  <span className="duration">{item.duration}</span>
                </div>

                <p className="company">{item.company}</p>

                <ul className="experience-points">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
