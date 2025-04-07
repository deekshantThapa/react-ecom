import { useContext } from "react"
import myContext from "../../context/Data/MyContext"

export default function UpdateProduct() {

  const context = useContext(myContext);
  const {loading, products, setProducts, updateProduct} = context;

  return (
    <section className="product-add-update">
      <div className="container">
        <form action="" onSubmit={updateProduct}>
          <h3>Update Product</h3>
          <div className="input-wrap">
            <label htmlFor="">Product Title</label>
            <input type="text" name="text" id="" required
            value={products.title}
            onChange={(e) => setProducts({...products, title: e.target.value})}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Price</label>
            <input type="number" name="number" id="" required
            value={products.price}
            onChange={(e) => setProducts({...products, price: e.target.value})}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Image Url</label>
            <input type="text" name="text" id="" required
            value={products.imageUrl}
            onChange={(e) => setProducts({...products, imageUrl: e.target.value})}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Category</label>
            <select required
            value={products.category} onChange={(e) => setProducts({...products, category: e.target.value})}
            >
              <option value="">Choose Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothes">Clothes</option>
            </select>
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Description</label>
            <textarea name="description" id="" rows={5}
            value={products.description}
            onChange={(e) => setProducts({...products, description: e.target.value})}>  
            </textarea>
          </div>
          <button className="btn-primary">
            {loading ? <span className="loader"></span> : 'Update product' }
          </button>
        </form>
      </div>
    </section>
  )
}