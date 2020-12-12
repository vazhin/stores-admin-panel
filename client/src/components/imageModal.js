import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const ImageModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Image</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        <Image src={props.image} rounded className="w-75" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
