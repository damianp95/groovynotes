import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Router from "./services/Router/Router"
import {ToastContainer} from 'react-toastify'
import SideNav from './components/SideNav/SideNav';
import {Container,Row,Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
            <Header/>
        </Row>
        <Row>
          <Col lg={1} md={1}>
           <SideNav/>
          </Col>
          <Col lg={11} md={11}>
            <Router/>
            <ToastContainer autoClose={3000} />
          </Col>
        </Row>  
       </Container>
    </div>
  );
}

export default App;
