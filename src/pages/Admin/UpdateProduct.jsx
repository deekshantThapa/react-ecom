export default function UpdateProduct() {
  return (
    <section className="product-add-update">
      <div className="container">
        <form action="">
          <h3>Update Product</h3>
          <div className="input-wrap">
            <label htmlFor="">Product Title</label>
            <input type="text" name="text" id="" required
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Price</label>
            <input type="number" name="number" id="" required
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Image Url</label>
            <input type="text" name="text" id="" required
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Category</label>
            <input type="text" name="text" id="" required
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="">Product Description</label>
            <textarea name="description" id="" rows={5}></textarea>
          </div>
          <button className="btn-primary">Update product</button>
        </form>
      </div>
    </section>
  )
}