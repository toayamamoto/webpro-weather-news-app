export default function Footer() {
  return (
    <footer className="footer" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="content has-text-centered">
        <p>ニュースと天気とポケモンは下記のAPIから入手しました</p>
        <p>
          <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
            News API
          </a>
        </p>
        <p>
          <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
            OpenWeatherMap API
          </a>
        </p>
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
        Pokémon API
          </a>
      </div>
    </footer>
  );
}
