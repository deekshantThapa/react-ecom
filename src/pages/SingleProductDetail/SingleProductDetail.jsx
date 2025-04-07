import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/Data/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/CartSlice";
import { IoMdArrowBack } from "react-icons/io";

export default function SingleProductDetail() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // getting single product data with id
  const [product, setProduct] = useState("");
  const params = useParams();

  const getSingleProductData = async () => {
    setLoading(true);

    try {
      const singleProuductData = await getDoc(
        doc(fireDB, "products", params.id)
      );
      // console.log(singleProuductData)
      // setProduct(singleProuductData.data());
      setProduct({ id: singleProuductData.id, ...singleProuductData.data() });
      setLoading(false);
    }
    catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  // using redux to add product

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);

  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  const handleAddToCart = (product) => {
    if (user?.user?.email === "admin@gmail.com") {
      toast.error("You can't add product as an admin");
    }
    else if (user?.user?.email) {
      dispatch(addToCart(product));
      toast.success("Added to cart");
      console.log(product.title, product.id);
    }
    else {
      toast.error("Login to add products");
    }
  };

  // storing value in local storage

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="single-product-detail">
      <div className="container">
        <div className="btn-wrap">
          <Link to={'/'} className="btn-secondary back-btn"><IoMdArrowBack />Go Back</Link>
        </div>
        {loading && (
          <div className="loader-wrap">
            <span className="loader loader-big"></span>
            <p>Fetching product</p>
          </div>
        )}
        {product && (
          <div className="single-product-detail-wrap">
            <figure>
              <img src={product.imageUrl} alt="" />
            </figure>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.price} $</p>
              <div className="description">
                <h6>About this product:</h6>
                <p>{product.description}</p>
              </div>
              <button className="btn-primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}