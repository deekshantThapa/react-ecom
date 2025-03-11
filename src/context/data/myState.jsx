import MyContext from "./myContext"

export default function myState(props) {

    const profile = {
        user: 'shyam',
        address: 'ktm'
    }

    const cars = {
        petrol: 'toyota',
        electric: 'byd'
    }

  return (
    <MyContext.Provider value={{profile, cars}}>
        {props.children}
    </MyContext.Provider>
  )
}