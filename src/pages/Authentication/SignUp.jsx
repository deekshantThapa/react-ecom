import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import myContext from "../../context/Data/MyContext";

export default function SignUp() {

  const context = useContext(myContext);

  const {loading, setLoading} = context;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    setLoading(true);

    try{

      // 'createUserWithEmailAndPassword' -- firebase method 

      const users = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(users);

      // set display name in firebase auth
      await updateProfile(users.user, {
        displayName: name
      });

      // creating a user and storing it in firestore database

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now()
      }

      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Sign up successful");
      setLoading(false);
      setName('');
      setEmail('');
      setPassword('');
    }

    catch(error){
      console.log(error);
      toast.error("Couldn't sign up")
      setLoading(false);
    }

  }

  return (
    <section className="signup">
      <div className="container">
        <div className="registration-form-wrap">
          <form action="" onSubmit={handleSignUp}>
            <div className="input-wrap">
              <label htmlFor="">Name</label>
              <input type="text" name="name" id="" required
              value={name} onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" required
              value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrap">
              <label htmlFor="">Password</label>
              <input type="password" name="" id="" required
              value={password} onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn-primary">
              {loading ? <span className="loader"></span> : 'Sign Up' }
            </button>
          </form>
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
          <span className="back-to-home">Back to <Link to={'/'}>Home</Link></span>
        </div>
      </div>
    </section>
  );
}
