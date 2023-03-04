import React from 'react';
import Header from './components/Header';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Menu/>
        <section>
          <p>описание</p>
        </section>
        <section>
          статья
        </section>
      </main>
      <footer>
        Подвал сайта
      </footer>
    </div>
  );
}

export default App;
