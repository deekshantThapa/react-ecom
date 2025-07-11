import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/Data/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/CartSlice";
import { IoMdArrowBack } from "react-icons/io";

export default function SingleProductDetail() {

  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const [quantity, setQuantity] = useState(1);

  // 1. getting single product data with id
  const [product, setProduct] = useState("");
  const params = useParams();

  const getSingleProductData = async () => {
    setLoading(true);

    try {
      const singleProuductData = await getDoc(
        doc(fireDB, "products", params.id)
      );
      // console.log(singleProuductData)
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

  // 2. using redux to add product
  
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
      dispatch(
        addToCart({...product, quantity})
      );

      toast.success("Added to cart");
      // console.log(product.title, product.id);
    }
    else {
      toast.error("Login to add products");
    }
  };

  const navigate = useNavigate();

  return (
    <section className="single-product-detail">
      <div className="container">
        <div className="btn-wrap">
          <button onClick={() => navigate(-1)} className="btn-secondary back-btn"><IoMdArrowBack />Go Back</button>
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
              <p className="price">{product.price} $</p>
              <div className="description">
                <h6>About this product:</h6>
                <p>{product.description}</p>
              </div>
              <div className="quantity-selector">
                <button
                onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
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