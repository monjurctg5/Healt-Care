
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';


function App() {
  return (
    <div className = "App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/details/:id">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
