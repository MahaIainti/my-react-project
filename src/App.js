import React from 'react';
import Menu from './components/Menu';
import { Outlet } from "react-router-dom";
import './styles/App.css';


    

function App() {
  return (
    <div>
        <Menu/>
        <Outlet/>
    </div>
  );
}

export default App;
