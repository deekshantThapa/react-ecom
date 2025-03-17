import { useState } from "react";
import MyContext from "./MyContext"

export default function myState(props) {

  // 1. toggle dark and light mode

  const [darkMode, setDarkMode] = useState(false);

  const themeToggle = () => {

    if(darkMode){
      document.body.classList.remove('dark-mode')
      setDarkMode(false)
    }
    else{
      document.body.classList.add('dark-mode')
      setDarkMode(true)
    }

  }

  // 2. loader

  const [loading, setLoading] = useState(false);

  return (
  <MyContext.Provider value={{darkMode, themeToggle, loading, setLoading}}>
      {props.children}
    </MyContext.Provider>
  );
}