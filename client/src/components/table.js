import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Image } from 'react-bootstrap';
import ImageModal from './imageModal';
import db from '../services/dataService';
import { setItems } from '../redux/actions/actions';

const DataTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState('');
  const [fields, setFields] = useState(null);
  const items = useSelector((state) => state.items);
  const typeOfItems = useSelector((state) => state.typeOfItems);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (typeOfItems) {
      case 'stores':
        setFields(['name', 'logo']);
        break;

      case 'categories':
        setFields(['name', 'image']);
        break;

      case 'products':
        setFields(['name', 'price', 'quantity', 'image']);
        break;

      default:
        break;
    }
    // eslint-disable-next-line
  }, []);

  console.log(fields);
  console.log(items);

  return (
    items &&
    fields && (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              {fields.map((field) => {
                return <th>{field.toUpperCase()}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr
                  key={item.uuid}
                  onClick={async () => {
                    const response = await db.getById(item.uuid, typeOfItems);
                    dispatch(setItems(response.data.items));
                  }}
                >
                  {fields.map((field) => {
                    if (['logo', 'image'].includes(field)) {
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
                    } else {
                      return <td>{item[field]}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <ImageModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          image={image}
        />
      </>
    )
  );
};

export default DataTable;
