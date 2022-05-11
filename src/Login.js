import './Login.css'

function Login() {

    const register = () =>{};
    const loginToApp = () =>{};
  return (
    <div className="login">
      {/* <h1>Login Component </h1> */}
      <img src="https://1000logos.net/wp-content/uploads/2017/03/Font-of-the-LinkedIn-Logo.jpg" alt="" />


      <form action="">
        <input placeholder="Full Name (if registering)" type="text" />

        <input placeholder="Profile Pic URL (optional)" type="text" />

        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="text" />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member.
          <span className="login__register" onClick={register}> Register now</span></p>
    </div>
  )
}

export default Login
