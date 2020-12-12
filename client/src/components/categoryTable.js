import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table, Image } from 'react-bootstrap';
import ImageModal from './imageModal';
import db from '../services/dataService';
import { setData } from '../redux/actions';

const CategoryTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState('');
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  let history = useHistory();

  const fields = ['name', 'logo'];

  if (data.items && data.items.length === 0) {
    console.log('yep');
    return (
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: '400px' }}
      >
        <h2>No Categories Yet!</h2>
        <h2>Try adding one.</h2>
      </div>
    );
  }

  return (
    <>
      {data.items && (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                {fields.map((field) => (
                  <th>{field}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.items.map((item) => {
                return (
                  <tr
                    key={item.uuid}
                    onClick={async () => {
                      const response = await db.getById(
                        item.uuid,
                        'categories'
                      );
                      dispatch(setData(response.data));
                      history.push('/products');
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
                                setImage(
                                  `http://localhost:5000/${item[field]}`
                                );
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
      )}
    </>
  );
};

export default CategoryTable;
