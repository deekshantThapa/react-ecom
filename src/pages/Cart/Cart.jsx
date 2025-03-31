import { useSelector } from "react-redux";

export default function Cart() {

  const cartItems = useSelector(state => state.cart);
  console.log(cartItems);

  return (
    <>
      <section className="cart">
        <div className="container">
          <div className="cart-wrap">
            <div className="cart-items">
              {cartItems &&
                cartItems.map((item, index) => {
                  const {title, imageUrl, price, description} = item;

                  return(
                    <div className="cart-item">
                      <figure>
                        <img src={imageUrl} alt="" />
                      </figure>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <p>{price} $</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}