import background from './background.jpg';
import './App.css';

const redirectLink = 'https://www.facebook.com/scoalaAutoCLD';

const redirect = (url) => {
  if (url !== '' && url.slice(0, 4) === 'http') {
    window.location.href = url;
  }

  var g = 'https://www.google.com';
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
        <h1>In curand</h1>
        <p className="description">
          Site-ul nostru este in lucru si va fi publicat in cel mai scurt timp.
          Pana atunci ne puteti vizita pagina de facebook. Multumim pentru
          intelegere.!
        </p>
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
