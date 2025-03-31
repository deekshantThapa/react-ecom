import { useContext, useEffect } from "react"
import myContext from "../../context/Data/MyContext"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/CartSlice";
import { toast } from "react-toastify";

export default function Home() {

  const context = useContext(myContext);
  const {product, loading} = context;

  // using redux to add product

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);
  console.log(cartItems);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  }

  // storing value in local storage
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <section className="all-products">
        <div className="container">
          <h2 className="entry-title">All Products</h2>
          {loading && (
            <div className="loader-wrap">
              <span className="loader"></span>
              <p>Fetching products from firebase</p>
            </div>
          )}
          <div className="products-wrap">
            {product &&
              product.map((item, index) => {
                const { title, price, imageUrl } = item;

                return (
                  <div className="product" key={index}>
                    <img src={imageUrl} alt="" />
                    <h4>{title}</h4>
                    <p>{price} $</p>
                    <button
                      className="btn-primary"
                      onClick={() => addCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}