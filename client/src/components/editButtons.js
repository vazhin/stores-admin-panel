import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const EditButtons = ({ setModalShow, setItemClicked }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <span
        className="rounded-circle d-inline-flex justify-content-center align-items-center bg-secondary"
        style={{
          width: '27px',
          height: '27px',
          cursor: 'pointer',
        }}
        onClick={(e) => {
          setItemClicked(e.currentTarget.parentNode.parentNode.parentNode.id);
          setModalShow(true);
          e.cancelBubble = true;
          e.stopPropagation();
        }}
      >
        <FaPencilAlt color="white" />
      </span>
      <span
        className="rounded-circle d-inline-flex justify-content-center align-items-center bg-secondary ml-2"
        style={{
          width: '27px',
          height: '27px',
          cursor: 'pointer',
        }}
        onClick={(e) => {
          e.cancelBubble = true;
          e.stopPropagation();
        }}
      >
        <FaTrashAlt color="white" />
      </span>
    </div>
  );
};

export default EditButtons;
