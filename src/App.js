import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./pages/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
        </Router>
      </header>
    </div>
  );
}

export default App;
