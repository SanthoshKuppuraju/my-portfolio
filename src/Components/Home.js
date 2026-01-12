import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Styles/hero.css";
import profileImg from "../Assets/my photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center gy-5">
          {/* LEFT CONTENT */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="hero-title">
                Hi, I’m <span>Santhosh</span>
              </h1>

              <p className="hero-subtitle">
                React Developer building modern web experiences
              </p>

              <Button className="glow-btn mt-4">
                <a
                  className="resume-btn"
                  href="/SANTHOSH_K_RESUME.pdf"
                  download
                >
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="hero-image-wrapper"
            >
              <img
                src={profileImg}
                alt="Santhosh profile"
                className="hero-image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
