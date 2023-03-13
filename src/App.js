import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Description from './components/Description';
import './styles/App.css';




function App() {

  const nav = [
    {id: 1, name: 'О расстановках', href: 'About the constelations.html'},
    {id: 2, name: 'формат работы', href: 'Work format.html'},
    {id: 3, name: 'новости', href: 'News.html'},
    {id: 4, name: 'отзывы', href: 'Reviews.html'},
    {id: 5, name: 'о себе', href: 'about me.htm'},
  ]
  return (
    <div className="App">
      <main>
        <Header/>
        <Menu nav = {nav} key = {nav.id}/>
        <Description/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
