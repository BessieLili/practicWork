import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🌟 Моя Креативна Сторінка 🌟</h1>
        <nav>
          <ul>
            <li><a href="#about">Про проєкт</a></li>
            <li><a href="#author">Автор</a></li>
            <li><a href="#design">Дизайн</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="App-section">
          <h2>Про проєкт</h2>
          <p>
            Цей проєкт створений як шаблон для подальшої роботи з React. Він слугує прикладом
            структури сторінки та демонстрацією можливостей сучасних веб-технологій.
          </p>
          <blockquote>
            "Кожен великий код починається з маленької ідеї." – Автор
          </blockquote>
        </section>

        <section id="author" className="App-section">
          <h2>Автор</h2>
          <p>
            Ім'я: <strong>Ротар Єлізавета</strong> <br />
            GitHub: <a href="https://github.com/BessieLili" target="_blank" rel="noopener noreferrer">Мій GitHub</a>
          </p>
        </section>

        <section id="design" className="App-section">
          <h2>Оригінал дизайну</h2>
          <p>
            Ця сторінка базується на власній ідеї тобто референс не використовувався
          </p>
        </section>
      </main>

      <footer className="App-footer">
        <p>© 2024 Ротар Єлізавета. Всі права захищені.</p>
        <p>
          <a href="https://github.com/ваш-логін/react-template-page" target="_blank" rel="noopener noreferrer">Вихідний код на GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

