import React from 'react';
import { Image } from 'react-bootstrap';

const ImageInTable = ({ item, setImage, setModalShow, field }) => {
  return (
    <td className="p-1 pl-3">
      <Image
        src={`http://localhost:5000/${item[field]}`}
        rounded
        style={{
          width: '50px',
          height: 'auto',
          cursor: 'pointer',
        }}
        onClick={() => {
          setModalShow(true);
          setImage(`http://localhost:5000/${item[field]}`);
        }}
      />
    </td>
  );
};

export default ImageInTable;
