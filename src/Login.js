import './Login.css'

function Login() {

    const register = () =>{};
    const loginToApp = () =>{};
  return (
    <div className="login">
      {/* <h1>Login Component </h1> */}
      <img src="https://www.cnm.edu/depts/mco/marketing/images/linkedin-logo.png/@@images/6ad51553-54d7-4bc5-8580-bb557c918571.jpeg" alt="" />


      <form action="">
        <input placeholder="Full Name (if registering)" type="text" />

        <input placeholder="Profile Pic URL (optional)" type="text" />

        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="text" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?
          <span className="login__register" onClick={register}>Register now</span></p>
    </div>
  )
}

export default Login
