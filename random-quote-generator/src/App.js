import React from 'react';
import Quotebox from './components/Quotebox';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row xs={6} md={8} lg={20} className="justify-content-center">
        <Col xs={8} md={50} lg={40} className="text-center">
        <div className="App">
       <Quotebox />
       </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;