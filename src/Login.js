import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import "./Login.css";
// import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name.");
    }
    //Doesnt recognize createUserWithEmailAndPassword as a function.Error in console.
    createUserWithEmailAndPassword(auth, email, password) // There is a problem in this line.
      .then((userAuth) => {
        const { user } = userAuth;
        console.log(user);
        updateProfile(user, {
          displayName: name,
          profileURL: profilePic,
        })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
          .catch((e) => console.error(e));
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Font-of-the-LinkedIn-Logo.jpg"
        alt=""
      />

      <form action="">
        <input
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (if registered)"
          type="text"
        />

        <input
          defaultValue={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Pic URL (optional)"
          type="text"
        />

        <input
          defaultValue={email}
          // Use onChange prop instead of onClick, onClick was getting trigerred only when you were clickin in the input field
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          defaultValue={password}
          // Use onChange prop instead of onClick, onClick was getting trigerred only when you were clickin in the input field
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="text"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member.
        <span className="login__register" onClick={register}>
          {" "}
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
