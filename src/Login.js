import React, {useState} from 'react';
import { auth } from "./firebase";
import './Login.css'

function Login() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const register = () =>{
        if(!name){
            return alert("Please enter a full name.")
        }

        auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                profileURL: profilePic,
            })
        })
    };
    const loginToApp = (e) =>{
        e.preventDefault();
    };
  return (
    <div className="login">
      <img src="https://1000logos.net/wp-content/uploads/2017/03/Font-of-the-LinkedIn-Logo.jpg" alt="" />


      <form action="">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name (if registered)" type="text" />

        <input value={profilePic} onClick={e => setProfilePic(e.target.value)} placeholder="Profile Pic URL (optional)" type="text" />

        <input value={email} onClick={e => setEmail(e.target.value)} placeholder="Email" type="email" />
        <input value={password} onClick={e => setPassword(e.target.value)} placeholder="Password" type="text" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member.
          <span className="login__register" onClick={register}> Register now</span></p>
    </div>
  )
}

export default Login
