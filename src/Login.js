import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      history.push("/");
    });
  };
  const register = (e) => {
    e.preventDefault();
    //go to firebase register

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <div className="login_logo">
          {/* <h1>this is login page</h1> */}
          <img
            className="login_logo"
            src="https://cdn.dribbble.com/users/633027/screenshots/3285561/andromedaaaaaaaaaa.png"
          ></img>
        </div>
      </Link>
      <div className="login_inputs">
        <h1>Sign in </h1>
        <form>
          <h5>email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="input your email"
          ></input>
          <h5>passowrd</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="input your passowrd"
          ></input>
          <button type="submit" onClick={signIn} className="login_signin">
            Sign in
          </button>
        </form>
        <p>lorem ipsum</p>
        <button onClick={register} className="login_register">
          Create your Amazone account
        </button>
      </div>
    </div>
  );
}

export default Login;
