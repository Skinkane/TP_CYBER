import './App.css';
import Info from './Informations.js';
import MyClock from './Clock.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Info/>
      </header>
      <footer>
        <MyClock/>
      </footer>
    </div>
  );
}

export default App;
