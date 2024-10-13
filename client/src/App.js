import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Nav/>
      <Home/>
    </Router>
  );
}

export default App;
