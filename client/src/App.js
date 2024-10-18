import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Donate from './pages/Donate';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Donate/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
