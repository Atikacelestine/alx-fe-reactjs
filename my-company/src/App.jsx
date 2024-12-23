import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
import Navbar from '../Navbar';


function App() {
  return (
    <Router>
        <div>
            <Navbar/>
            <Routes>
                <Route path="/home"
                element={<Home/>}/>
                <Route path ="/about"
                element={<About/>}/>
                <Route path="/services"
                element={<Services/>}/>
                <Route path="/contact"
                element={<Contact/>}/>
            </Routes>
        </div>
    </Router>

  );
}

export default App;
