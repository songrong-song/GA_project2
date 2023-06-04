import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import './App.css';
import Details from "./Details/Details";
import Home from "./components/Home/Home";

function App() {

  return (
    <div className="App">

      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
          </Routes>
        </main>
      </Router>

    </div>

  );
}

export default App;



