import { useContext } from "react"
import myContext from "../../context/Data/MyContext"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CartSlice";

export default function Home1() {

  const context = useContext(myContext);

  // redux
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart)

  const addCart = () => {
    dispatch(addToCart('trouser'))
  }

  const deleteCart = () => {
    dispatch(deleteFromCart('trouser'))
  }

  return (
    <>
    <section>
      <div className="container">
        <button onClick={() => addCart()}>add</button>
        <button onClick={deleteCart}>delete</button>
      </div>
    </section>
    </>
  )
}