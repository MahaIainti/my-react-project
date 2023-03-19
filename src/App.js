import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import './styles/App.css';


    

function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
