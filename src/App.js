import React from 'react';
import Header from './components/Header';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <nav>
          Навигация
        </nav>
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
