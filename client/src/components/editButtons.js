import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

const EditButtons = () => {
  return (
    <td className="d-flex justify-content-center align-items-center">
      <div
        className="rounded-circle d-flex justify-content-center align-items-center bg-secondary"
        style={{
          width: '27px',
          height: '27px',
        }}
      >
        <FaPencilAlt color="white" />
      </div>
      <div
        className="rounded-circle d-flex justify-content-center align-items-center bg-secondary ml-2"
        style={{
          width: '27px',
          height: '27px',
        }}
      >
        <FaTrashAlt color="white" />
      </div>
    </td>
  );
};

export default EditButtons;
