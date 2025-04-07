import { useContext, useEffect } from "react"
import myContext from "../../context/Data/MyContext"
import { Link } from "react-router-dom";

export default function Home() {

  const context = useContext(myContext);
  const {product, loading} = context;

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'product-images');
    data.append('cloud_name', 'davl2avhp');

    const response = await fetch('https://api.cloudinary.com/v1_1/davl2avhp/image/upload', {
      method: "POST",
      body: data
    })

    const uploadedImageUrl = await response.json();
    console.log(uploadedImageUrl.url);
  }

  return (
    <>
      <section className="all-products">
        <div className="container">
          <h2 className="entry-title">All Products</h2>
          {loading && (
            <div className="loader-wrap">
              <span className="loader loader-big"></span>
              <p>Fetching products</p>
            </div>
          )}
          <div className="products-wrap">
            {product &&
              product.map((item, index) => {
                const { title, price, imageUrl, id } = item;

                return (
                  <div className="product" key={index}>
                    <Link to={`product-detail/${id}`}>
                      <figure>
                        <img src={imageUrl} alt="" />
                      </figure>
                      <h5>
                        {title.length > 30 ? title.substring(0, 30) + "..." : title}
                      </h5>
                      <p>{price} $</p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      <section className="image-upload">
        <div className="container">
          <h3>Upload image</h3>
          {loading && <p>loading</p>}
          <input type="file" name="" id="" onChange={handleFileUpload}/>
        </div>
      </section>
    </>
  );
}