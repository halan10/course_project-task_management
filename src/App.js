import "./App.css";
import { About } from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <About />
    </div>
  );
}

export default App;
