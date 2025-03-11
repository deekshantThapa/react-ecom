import { useContext } from "react"
import myContext from "../../context/data/myContext"

export default function Home() {

  const context = useContext(myContext);  

  const { profile: {user, address}, cars: {petrol, electric}} = context;

  return (
    <section>
      <div className="container">
        <h4>Name: {user}</h4>
        <h4>Address: {address}</h4>
        <h4>petrol car: {petrol}</h4>
        <h4>electric car: {electric}</h4>
      </div>
    </section>
  )
}