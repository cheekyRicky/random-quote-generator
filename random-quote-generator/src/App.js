import React, {useState} from 'react';
import Quotebox from './components/Quotebox';
import './App.scss';
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const [bgColor, setBgColor] = useState('#854e4e');

  return (
    <Container 
    fluid 
    className="d-flex justify-content-center align-items-center vh-100"
    style={{ backgroundColor: bgColor, transition: 'background-color 1s ease' }}>
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} md={8} lg={6} xl={5} className="text-center h-100">
          <div className="App">
            <Quotebox setBgColor={setBgColor}/>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;