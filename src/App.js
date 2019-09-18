import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Router from "./services/Router/Router"
import Footer from "./components/Footer/Footer"
import {ToastContainer} from 'react-toastify'
import SideNav from './components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      <SideNav/>
      <Header/>
      <Router/>
       <ToastContainer autoClose={3000} />
      <Footer/>
    </div>
  );
}

export default App;
