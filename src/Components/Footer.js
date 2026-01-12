import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Santhosh K. All rights reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/SanthoshKuppuraju"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/santhosh-k-bca"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
