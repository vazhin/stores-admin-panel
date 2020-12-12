import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateItemForm from './form';

function CreateItemModal(props) {
  console.log(props.table);
  console.log(props.mode);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.mode.charAt(0).toUpperCase() + props.mode.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateItemForm table={props.table} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateItemModal;
