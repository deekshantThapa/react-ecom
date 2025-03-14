import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="signup">
      <div className="container">
        <div className="registration-form-wrap">
          <form action="">
            <div className="input-wrap">
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div className="input-wrap">
              <label htmlFor="">Password</label>
              <input type="password" name="" id="" />
            </div>
            <input type="submit" value="Sign up" />
          </form>
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </div>
    </section>
  );
}
