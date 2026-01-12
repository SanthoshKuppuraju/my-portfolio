import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container id="home" className="vh-100 d-flex align-items-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="display-3 fw-bold">
          Hi, I’m <span style={{ color: "#00f5d4" }}>Santhosh</span>
        </h1>

        <p className="text-secondary fs-4 mt-3">
          React Developer building modern web experiences
        </p>

        <Button className="glow-btn mt-4">View Projects</Button>
      </motion.div>
    </Container>
  );
};

export default Hero;
