import background from './background.jpg';
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
