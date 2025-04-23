import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/Data/MyContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(myContext);
  const {loading, setLoading} = context;

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const login = await signInWithEmailAndPassword(auth, email, password);
      // console.log(login);

      // Store user in local storage
      localStorage.setItem('user', JSON.stringify(login));

      // show toast success message
      toast.success("Login successful");

      // navigate to homepage after successful login in
      navigate('/');
    }

    catch (error) {
      console.log(error);
      toast.error("Couldn't log in");
    }

    finally{
      setLoading(false);
    }

  }

  return (
    <section className="login">
      <div className="container">
        <div className="registration-form-wrap">
          <form action="" onSubmit={handleLogin}>
            <div className="input-wrap">
              <label htmlFor="">Email</label>
              <input type="email" name="email" id="" required
              value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="">Password</label>
              <input type="password" name="password" id="" required
              value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-primary">
              {loading ? <span className="loader"></span> : 'Login' }
            </button>
          </form>
          <span>Don't have an account? <Link to={'/signup'}>Signup</Link></span>
          <span className="back-to-home">Back to <Link to={'/'}>Home</Link></span>
        </div>
      </div>
    </section>
  );
}
