import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Donate from './pages/Donate';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Donate/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
