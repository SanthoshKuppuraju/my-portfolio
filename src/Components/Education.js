import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Styles/education.css";

const education = [
  {
    degree: "Frontend Development Course (React)",
    institute: "Achievers IT Trainings, Bangalore",
    year: "Dec 2023 – Jun 2024",
  },

  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute:
      "Shri Nehru Maha Vidyalaya College of Arts and Science, Coimbatore",
    year: "2020 – 2023",
  },
  {
    degree: "Higher Secondary (12th Grade)",
    institute: "Model School, Konganapuram, Salem",
    year: "2019 – 2020",
  },
  {
    degree: "Secondary School (10th Grade)",
    institute: "Sree Vari School, Panikanur, Salem",
    year: "2017 – 2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <Container>
        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="education-timeline">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="education-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-dot" />
                  <h3>{item.degree}</h3>
                  <p className="institute">{item.institute}</p>
                  <span className="year">{item.year}</span>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
