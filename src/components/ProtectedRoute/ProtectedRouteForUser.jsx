import { Navigate } from "react-router-dom";

export default function ProtectedRouteForUser({children}) {
  
    // parsing as we need the data in 'object' form
    const user = JSON.parse(localStorage.getItem('user'));

    if(user){
        return children
    }
    else{
        return <Navigate to={'/login'} />
    }
}