import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Styles/nav.css";
const CustomNavbar = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        bg="dark"
        variant="dark"
        className="floating-navbar py-3"
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold ">
            Santhosh<span style={{ color: "#00f5d4" }}> K</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto gap-4">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default CustomNavbar;
