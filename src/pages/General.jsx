import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Acquaintance from '../components/Acquaintance';
import Description from '../components/Description';




function General() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Acquaintance/>
        <Description/>
      </main>
      <Footer/>
    </div>
  );
}

export default General;
