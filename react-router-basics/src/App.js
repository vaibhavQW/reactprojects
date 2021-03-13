import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/Notfound'
function App() {
  return (
    <Router>
     <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route component={NotFound} />
       </Switch>
     </div>
    </Router>
  );
}

export default App;
