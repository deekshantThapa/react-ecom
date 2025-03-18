import { Navigate } from "react-router-dom";

export default function ProtectedRouteForAdmin({children}) {

    const admin = JSON.parse(localStorage.getItem('user'));

    if(admin?.user?.email === 'admin@gmail.com'){
        return children
    }
    else{
        return <Navigate to={'/login'} />
    }
  
}