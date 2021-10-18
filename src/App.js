
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className = "App">
   <AuthProvider>
   <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute  path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route path = "/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
   </AuthProvider>
 
    </div>
  );
}

export default App;
