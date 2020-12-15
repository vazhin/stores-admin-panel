import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateItemForm from '../forms/form';

function CreateItemModal({ show, onHide, table, itemClicked, mode }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateItemForm table={table} mode={mode} itemClicked={itemClicked} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateItemModal;
