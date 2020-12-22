import './App.css';
import pattern from "./assets/images/pattern-bg.png";
import IPTracker from "./containers/IPTracker/IPTracker";
function App() {
  return (
    <div className="App">

      <img className="header-pattern" src={pattern} alt="header-pattern" />
      <h1>IP Address Tracker</h1>

      <main>
        <IPTracker />
      </main>
    </div>
  );
}

export default App;
