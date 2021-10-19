
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
import Registration from './Components/Registration/Registration';
import Services from './Components/Services/Services';
import NotWork from './Components/NotWork/NotWork';
import Footer from './Components/Footer/Footer';
import Doctors from './Components/Doctors/Doctors';
import AppointMents from './Components/ApointMent/AppointMents';
import ShowApoin from './Components/ApointMent/ShowApoin';
import AboutUS from './Components/About/AboutUS';
import Contact from './Components/Contact/Contact';

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
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact  path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <Route exact path="/about">
            <AboutUS></AboutUS>
          </Route>
          <PrivateRoute exact path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route exact path="/showAppoint">
            <ShowApoin></ShowApoin>
          </Route>
          <PrivateRoute exact path = "/apointment">
            <AppointMents></AppointMents>
          </PrivateRoute>
          <PrivateRoute exact path = "/services">
            <Services></Services>
          </PrivateRoute>
          <Route exact path  = "/doctors">
            <Doctors></Doctors>
          </Route>
          <Route  path = "/login">
            <Login></Login>
          </Route>
          <Route path = "/register">
            <Registration></Registration>
          </Route>
          <Route  path="*">
            <NotWork></NotWork>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
