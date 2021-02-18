import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect, useState } from "react";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // the bracket indicated it will only run once when the app componnet loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);
      if (authUser) {
        //the usr just logged in / or was logged in
        console.log("the usedr is logged in ");

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Header />
            {/* <h1>this is l</h1> */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/*Header*/}
        {/*Header*/}
      </div>
    </Router>
  );
}

export default App;
