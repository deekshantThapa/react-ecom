import { useContext } from "react"
import myContext from "../../context/Data/MyContext"

export default function AddProduct() {

  const context = useContext(myContext);
  const {products, setProducts, addProduct, loading} = context;

  return (
    <section className="product-add-update">
      <div className="container">
        <form action="" onSubmit={addProduct}>
          <h3>Add Product</h3>
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
            <input type="text" name="text" id="" required
            value={products.category}
            onChange={(e) => setProducts({...products, category: e.target.value})}
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Description</label>
            <textarea name="description" id="" rows={5}
            value={products.description}
            onChange={(e) => setProducts({...products, description: e.target.value})}>  
            </textarea>
          </div>
          <button className="btn-primary">
            {loading ? <span className="loader"></span> : 'Add product' }
          </button>
        </form>
      </div>
    </section>
  )
}