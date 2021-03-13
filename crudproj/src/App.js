import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/Notfound'
import AddUser from './components/user/Adduser';
import EditUser from './components/user/EditUser'
import User from './components/user/User'

function App() {
  return (
    <Router>
     <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/users/add" component={AddUser} />
         <Route exact path="/users/edit/:id" component={EditUser} />
         <Route exact path="/users/:id" component={User}/>
         <Route component={NotFound} />
       </Switch>
     </div>
    </Router>
  );
}

export default App;
