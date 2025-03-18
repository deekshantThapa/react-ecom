import MyContext from "./MyContext"
import { Navigate } from "react-router-dom";

export default function myState(props) {

  const ProtectedRouteForUser = ({children}) => {

    const user = localStorage.getItem('user');

    if(user){
      return children
    }
    else{
      return <Navigate to={'/login'} />
    }

  } 

  return (
  <MyContext.Provider 

    value={{ProtectedRouteForUser}}>

    {props.children}

  </MyContext.Provider>
  );
}