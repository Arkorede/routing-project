import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
