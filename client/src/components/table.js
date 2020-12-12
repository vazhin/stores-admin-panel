import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ImageModal from './imageModal';
import db from '../services/dataService';
import { setData, setPreviousId } from '../redux/actions';
import EditButtons from './editButtons';
import ImageInTable from './image';
import CreateItemModal from './modal';

const DataTable = ({ table }) => {
  const [createModalShow, setCreateModalShow] = useState(false);
  const [imageModalShow, setImageModalShow] = useState(false);
  const [image, setImage] = useState('');
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  let history = useHistory();

  const fields = [];

  switch (table) {
    case 'stores':
      fields.push('name', 'numOfCategories', 'logo');
      break;
    case 'categories':
      fields.push('name', 'numOfProducts', 'image');
      break;
    case 'products':
      fields.push('name', 'price', 'quantity', 'image');
      break;
    default:
      break;
  }

  useEffect(() => {
    if (table === 'stores') retrieveItems();
    // eslint-disable-next-line
  }, []);

  const retrieveItems = async () => {
    try {
      const response = await db.getAll(table, data.pageNum ? data.pageNum : 1);
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  if (data.items && data.items.length === 0) {
    return (
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: '400px' }}
      >
        <h2>No {table.charAt(0).toUpperCase() + table.slice(1)} Yet!</h2>
        <h2>Try adding one.</h2>
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
                  field === 'numOfCategories' || field === 'numOfProducts' ? (
                    <th key={i}>
                      {field.slice(5, field.length).toUpperCase()}
                    </th>
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
                      if (table === 'products') return;

                      const response = await db.getById(item.uuid, table);
                      dispatch(setData(response.data));
                      if (table === 'stores') {
                        history.push(`/categories/${item.uuid}`);
                      }
                      if (table === 'categories') {
                        history.push(`/products/${item.uuid}`);
                      }

                      dispatch(setPreviousId(item.id));
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
            table={table}
            mode={'edit'}
          />
        </>
      )}
    </>
  );
};

export default DataTable;
