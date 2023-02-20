import './App.css';
import background from './images/background.jpg';
import posterImage from './images/CLD_poster_A3.jpg';

const redirectLink = 'https://www.facebook.com/scoalaAutoCLD';

const redirect = (url) => {
  if (url !== '' && url.slice(0, 4) === 'http') {
    window.location.href = url;
  }
};

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <header className="App-header">
        <h1>În curând</h1>
        <img src={posterImage} />
        <p className="description">
          Site-ul nostru este în lucru și va fi publicat în cel mai scurt timp.
          Pană atunci ne puteți vizita pagina de Facebook.
        </p>
        <p className="description"> Vă mulțumim pentru înțelegere!</p>
        <button
          onClick={() => {
            redirect(redirectLink);
          }}
          className="button"
        >
          Facebook
        </button>
      </header>
    </div>
  );
}

export default App;
