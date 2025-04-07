import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Cart() {

  const cartItems = useSelector(state => state.cart);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success('Item deleted');
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  // total amount
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    cartItems.forEach(cartItem => {
      // amt = amt + parseInt(cartItem.price)
      amt += parseInt(cartItem.price * cartItem.quantity);
    });
    setTotalAmount(amt);
    // console.log(amt);
  }, [cartItems])

  // add shipping amount
  const shipping = parseInt(50);

  // grand total amount
  const grandTotal = totalAmount + shipping;

  return (
    <>
      <section className="cart">
        <div className="container">
          <div className="cart-wrap">
            <div className="cart-items">
              {cartItems.length > 0 ?
                cartItems.map((item, index) => {
                  const {title, imageUrl, price, description, quantity} = item;

                  return (
                    <div className="cart-item" key={index}>
                      <div className="image-wrap">
                        <figure>
                          <img src={imageUrl} alt="" />
                        </figure>
                        <span className="quantity">Quantity: X {item.quantity}</span>
                      </div>
                      <div className="cart-detail">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p>{price} $</p>
                      </div>
                      <button className="delete" onClick={() => deleteCart(item)}>
                        <MdOutlineDelete size={24} />
                      </button>
                    </div>
                  );
                })
                :
                <div className="empty-cart">
                  <h4>Your cart is empty</h4>
                  <p>Go to <Link to={'/'}>Homepage</Link> to add products</p>
                </div>
              }
            </div>
            <div className="cart-summary">
                <div>
                  <h6>Subtotal</h6>
                  <span>{totalAmount} $</span>
                </div>
                <div>
                  <h6>Shipping</h6>
                  {cartItems.length > 0 ? <span>{shipping} $</span> : <span>0 $</span> }
                </div>
                <div className="total-amount">
                  <h6>Total</h6>
                  {cartItems.length > 0 ? <span>{grandTotal} $</span> : <span>0 $</span> }
                </div>
                <button className="btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}