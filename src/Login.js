import React, { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "./firebase";
import "./Login.css";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

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
        userAuth.user
          .updateProfile({
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
          });
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
          onClick={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Pic URL (optional)"
          type="text"
        />

        <input
          defaultValue={email}
          onClick={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          defaultValue={password}
          onClick={(e) => setPassword(e.target.value)}
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
