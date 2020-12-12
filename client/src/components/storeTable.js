import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ImageModal from './imageModal';
import db from '../services/dataService';
import { setData } from '../redux/actions';
import EditButtons from './editButtons';
import ImageInTable from './imageInTable';
import CreateItemModal from './modal';

const StoreTable = () => {
  const fields = ['name', 'logo', 'numOfCategories'];
  const [createModalShow, setCreateModalShow] = useState(false);
  const [imageModalShow, setImageModalShow] = useState(false);
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

  if (data.items && data.items.length === 0) {
    return (
      <div>
        <h2>No Stores Yet!</h2>
      </div>
    );
  }

  return (
    <>
      {data.items && (
        <>
          <Table striped bordered hover className="bg-white">
            <thead>
              <tr>
                {fields.map((field, i) =>
                  field === 'numOfCategories' ? (
                    <th key={i}>CATEGORIES</th>
                  ) : (
                    <th key={i}>{field.toUpperCase()}</th>
                  )
                )}
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
                    {fields.map((field, i) => {
                      if (['logo', 'image'].includes(field)) {
                        return (
                          <td className="p-1 pl-3" key={i}>
                            <ImageInTable
                              item={item}
                              field={field}
                              setImage={setImage}
                              setModalShow={setImageModalShow}
                            />
                          </td>
                        );
                      } else {
                        return <td key={i}>{item[field]}</td>;
                      }
                    })}
                    <td className="d-flex justify-content-center align-items-center">
                      <EditButtons setModalShow={setCreateModalShow} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <ImageModal
            show={imageModalShow}
            onHide={() => setImageModalShow(false)}
            image={image}
          />

          <CreateItemModal
            show={createModalShow}
            onHide={() => setCreateModalShow(false)}
            table={'stores'}
            mode={'edit'}
          />
        </>
      )}
    </>
  );
};

export default StoreTable;
