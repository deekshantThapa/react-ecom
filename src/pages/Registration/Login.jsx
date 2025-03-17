import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <div className="container">
        <div className="registration-form-wrap">
          <form action="">
            <div className="input-wrap">
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="" required/>
            </div>
            <div className="input-wrap">
              <label htmlFor="">Password</label>
              <input type="password" name="password" id="" required/>
            </div>
            <button>Login</button>
          </form>
          <span>Don't have an account? <Link to={'/signup'}>Signup</Link></span>
        </div>
      </div>
    </section>
  );
}
