import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import StoreTable from './storeTable';
import CategoryTable from './categoryTable';
import ProductTable from './productTable';
import TableControls from './controls';
import TableBreadCrumb from './breadcrumb';
import TablePagination from './pagination';
import db from '../services/dataService';
import { setData } from '../redux/actions';

const Main = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    retrieveItems('stores');
    // eslint-disable-next-line
  }, []);

  const retrieveItems = async (typeOfItems) => {
    try {
      const response = await db.getAll(
        typeOfItems,
        data.pageNum ? data.pageNum : 1
      );
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main
      className="d-flex justify-content-center align-items-center px-lg-5 px-0"
      style={{ height: '100vh' }}
    >
      <Container fluid>
        <Row>
          <Col>
            <Switch>
              <Route path="/categories">
                <TableBreadCrumb table={'categories'} />
                <TableControls table={'categories'} />
                <CategoryTable />
                <TablePagination table={'categories'} />
              </Route>

              <Route path="/products">
                <TableBreadCrumb table={'products'} />
                <TableControls table={'products'} />
                <ProductTable />
                <TablePagination table={'products'} />
              </Route>

              <Route path="/">
                <TableBreadCrumb table={'stores'} />
                <TableControls table={'stores'} />
                <StoreTable />
                <TablePagination table={'stores'} />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
