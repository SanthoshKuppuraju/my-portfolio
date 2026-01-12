import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Styles/about.css";
import AdditionalInfo from "./AddtionalInfo";
import { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-card"
            >
              <h2 className="about-title">About Me</h2>

              <p>
                I’m a Computer Applications graduate with hands-on experience in
                building dynamic and responsive web applications using
                <span> React, JavaScript, HTML, CSS,</span> and
                <span> Bootstrap</span>.
              </p>

              <p>
                I have worked as an Associate at Visionet Systems, where I
                handled client requirements, coordinated with cross-functional
                teams, and ensured smooth project execution.
              </p>

              <p>
                I’m a quick learner with strong problem-solving and
                communication skills, looking to grow as a frontend developer
                and contribute to impactful projects.
              </p>
              <button
                className="secondary-btn mt-3"
                onClick={() => setShowModal(true)}
              >
                View Additional Skills & Languages
              </button>

              <AdditionalInfo
                show={showModal}
                handleClose={() => setShowModal(false)}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
