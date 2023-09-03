import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Alert from './components/Alert';
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className='bg-gray-100'>
    <Navbar/>
    <Alert/>
    <div>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route exact path='/login'element={<Login/>} />
        <Route exact path='/signup'element={<Signup/>} />
        <Route exact path='/about'element={<About/>} />
      </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;
