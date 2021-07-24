import './App.scss';
import Myproject from './Components/Myproject';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Mackral's Coding Challenge - #001 of #100Days100Projects
      </header>
      <div className="App-content">
        <Myproject></Myproject>
      </div>
      <footer className="App-footer">
        <div>Part of <span className="hashtag">#100Days100Projects</span></div>
      </footer>
    </div>
  );
}

export default App;
