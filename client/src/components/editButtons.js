import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const EditButtons = () => {
  return (
    <>
      <div
        className="rounded-circle d-flex justify-content-center align-items-center bg-secondary"
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
        <FaPencilAlt color="white" />
      </div>
      <div
        className="rounded-circle d-flex justify-content-center align-items-center bg-secondary ml-2"
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
      </div>
    </>
  );
};

export default EditButtons;
