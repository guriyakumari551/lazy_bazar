import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home.jsx";
import Checkout from "./Checkout";
import Login from "./Login.js";
import { useStatevalue } from "./StateProvider";
// import {auth} from "./firebase";
function App() {
  const [{ user }, dispatch] = useStatevalue();
  //peice of code which runs based on given condition
  // useEffect(() => {
  //  const unsuscribe= auth.onAuthStateChanged((authUser) =>
  //    {
  //      if(authUser)
  //      {
  //      //if the user i logged in...
  //      dispatch(
  //        {
  //          type: "SET_USER",
  //          user: authUser,
  //        }
  //      );
  //      }
  //      else
  //      {
  //       //if the user is logged out...
  //     dispatch(
  //       {
  //         type: "SET_USER",
  //          user: null,
  //       }
  //     );

  //      }
  //   });
  //  return() =>{
  //    //ANY CLEANUP OPERATION GO IN HERE
  //    unsuscribe();
  //  }

  // }, []);
  // console.log(" user is >>>>>>",user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Checkout />,
          </Route>

          <Router path="/login">
            {/* <h1>Login page (Welcome to my page)</h1> */}
            <Login />
          </Router>
          {/* this is the default path */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
