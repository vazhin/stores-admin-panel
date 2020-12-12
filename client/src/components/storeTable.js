import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ImageModal from './imageModal';
import db from '../services/dataService';
import { setData } from '../redux/actions';
import EditButtons from './editButtons';
import ImageInTable from './image';

const StoreTable = () => {
  const fields = ['name', 'logo', 'numOfCategories'];
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState('');
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  let history = useHistory();

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
          <Table striped bordered hover className="bg-white">
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
                      history.push('/categories');
                    }}
                  >
                    {fields.map((field) => {
                      if (['logo', 'image'].includes(field)) {
                        return (
                          <>
                            <ImageInTable
                              item={item}
                              field={field}
                              setImage={setImage}
                              setModalShow={setModalShow}
                            />
                            <EditButtons />
                          </>
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
