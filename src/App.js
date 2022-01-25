import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './componant/Home'
import About from './componant/About'
import Contact from './componant/Contact'
import ErrorPage from './componant/ErrorPage'


function App() {
  return (
    <div>
    <Router>
  <ul className="nav-menu">
  
    <li className="nav-item"> <Link className="nav-link" to="/">Home</Link></li>
     <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
     <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
    
    
    </ul>
    <Routes>
    <Route path="/" element =  {<Home/>}/>
    <Route path="/About" element =  {<About/>}/>
    <Route path="/Contact" element =  {<Contact/>}/>
    <Route path="*" element = {<ErrorPage/>}/>
    </Routes>
    </Router>

      
    </div>
  );
}

export default App;
