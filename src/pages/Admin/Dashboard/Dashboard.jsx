import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../../context/Data/MyContext";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

export default function Dashboard() {

  const context = useContext(myContext);
  const {loading, product, handleEdit, deleteProduct} = context;

  // console.log(product);
  
  return (
    <section className="dashboard">
      <div className="container">
        <div className="admin">
          <h3>Hello admin</h3>
          <Link to={"/add-product"} className="btn-primary">Add Product</Link>
        </div>
        <div className="admin-product-details">
          <h3>Product Details</h3>
          <div className="admin-product-table">
            <table>
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product && product.map((item, index) => {
                  const {title, price, imageUrl, category, description, date} = item;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><img src={imageUrl} alt="" /></td>
                      <td>{title}</td>
                      <td>{price} $</td>
                      <td>{category}</td>
                      <td>{date}</td>
                      <td>
                        <Link to={'/update-product'}>
                          <span onClick={() => handleEdit(item)}><FaRegEdit /></span>
                        </Link>
                        <button className="delete-btn" onClick={() => deleteProduct(item)}><MdOutlineDelete /></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {loading && 
              <div className="loader-wrap">
                <span className="loader"></span>
                <p>Fetching products from firebase</p>
              </div> 
            }
          </div>
        </div>
      </div>
    </section>
  );
}