import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import DataTable from './table';
import TableControls from './controls';
import TableBreadCrumb from './breadcrumb';
import TablePagination from './pagination';
import db from '../services/dataService';
import { setData } from '../redux/actions/actions';

const Main = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

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
            <TableBreadCrumb />
            <TableControls />
            <DataTable />
            <TablePagination />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
