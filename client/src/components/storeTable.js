import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Image } from 'react-bootstrap';
import ImageModal from './imageModal';
import db from '../services/dataService';
import { setData } from '../redux/actions';

const StoreTable = () => {
  const fields = ['name', 'logo'];
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState('');
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveItems();
    // eslint-disable-next-line
  }, []);

  const retrieveItems = async () => {
    try {
      const response = await db.getAll(
        'stores',
        data.pageNum ? data.pageNum : 1
      );
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

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
                      const response = await db.getById(item.uuid, 'stores');
                      dispatch(setData(response.data));
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

export default StoreTable;
