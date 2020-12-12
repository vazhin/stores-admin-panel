import React from 'react';
import { Image } from 'react-bootstrap';

const ImageInTable = ({ item, setImage, setModalShow, field }) => {
  return (
    <Image
      src={`http://localhost:5000/${item[field]}`}
      rounded
      style={{
        width: '60px',
        height: 'auto',
        cursor: 'pointer',
      }}
      onClick={(e) => {
        setModalShow(true);
        setImage(`http://localhost:5000/${item[field]}`);
        e.cancelBubble = true;
        e.stopPropagation();
      }}
    />
  );
};

export default ImageInTable;
