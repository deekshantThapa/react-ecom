import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../../context/Data/MyContext";

export default function Dashboard() {

  const context = useContext(myContext);
  const {product} = context;

  console.log(product);
  

  return (
    <section className="dashboard">
      <div className="container">
        <h3>Hello admin</h3>
        <Link to={'/add-product'} className="btn-primary">Add Product</Link>
        <Link to={'/update-product'} className="btn-primary">Update Product</Link>
      </div>
    </section>
  )
}