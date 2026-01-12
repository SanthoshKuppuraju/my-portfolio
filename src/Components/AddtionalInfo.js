import { Modal, Button } from "react-bootstrap";

const AdditionalInfoModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
      contentClassName="custom-modal-content"
    >
      {/* HEADER */}
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title className="custom-modal-title">
          Additional Information
        </Modal.Title>
      </Modal.Header>

      {/* BODY */}
      <Modal.Body className="custom-modal-body">
        <h6>Languages</h6>
        <p>English, Tamil</p>

        <h6>Additional Skills</h6>
        <p>
          Documentation, Requirement Analysis, Client Coordination, MS Office
        </p>

        <h6>Soft Skills</h6>
        <p>
          Communication, Team Collaboration, Problem Solving, Time Management
        </p>
      </Modal.Body>

      {/* FOOTER */}
      <Modal.Footer className="custom-modal-footer">
        <Button variant="outline-light" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdditionalInfoModal;
