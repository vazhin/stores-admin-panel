import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import ImageModal from '../modals/imageModal';
import EditButtons from '../table-controls/editButtons';
import ImageInTable from '../modals/image';
import CreateItemModal from '../modals/modal';

const DataTable = () => {
  const [itemClicked, setItemClicked] = useState(null);
  const [createModalShow, setCreateModalShow] = useState(false);
  const [imageModalShow, setImageModalShow] = useState(false);
  const [image, setImage] = useState('');
  const data = useSelector((state) => state.data);
  const page = useSelector((state) => state.page);
  let history = useHistory();

  const fields = [];

  switch (page) {
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

  if (data.items && data.items.length === 0) {
    return (
      <div
        className="d-flex flex-column justify-content-center"
        style={{ height: '400px' }}
      >
        <h2>No {page.charAt(0).toUpperCase() + page.slice(1)} Yet!</h2>
        <h2>Try adding one.</h2>
      </div>
    );
  }

  return (
    <>
      {data.items && (
        <>
          <Table
            striped
            bordered
            hover
            className="bg-white"
            style={{ fontSize: '1.1rem' }}
          >
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
                    id={item.id}
                    onClick={async () => {
                      if (page === 'products') return;

                      if (page === 'stores') {
                        history.push(`/categories/${item.uuid}`);
                      }
                      if (page === 'categories') {
                        history.push(`/products/${item.uuid}`);
                      }
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
                    <td>
                      <EditButtons
                        setModalShow={setCreateModalShow}
                        setItemClicked={setItemClicked}
                      />
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
            itemClicked={itemClicked}
            mode={'edit'}
          />
        </>
      )}
    </>
  );
};

export default React.memo(DataTable);
