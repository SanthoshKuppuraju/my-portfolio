import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="contact-text">
                I’m open to frontend / React developer opportunities and would
                love to connect. Feel free to reach out through any of the
                channels below.
              </p>

              <div className="contact-links">
                <a href="mailto:santhoshkuppuraju@gmail.com">
                  <FaEnvelope />
                  santhoshkuppuraju@gmail.com
                </a>

                <a href="tel:8754756812">
                  <FaPhoneAlt />
                  +91 87547 56812
                </a>

                <a
                  href="https://www.linkedin.com/in/santhosh-k-bca"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/SanthoshKuppuraju"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
