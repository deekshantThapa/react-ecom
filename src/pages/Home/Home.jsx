import { useContext } from "react"
import myContext from "../../context/Data/MyContext"
import { Link } from "react-router-dom";

export default function Home() {

  const context = useContext(myContext);
  const {product, loading} = context;

  return (
    <>

      <section className="all-products">
        <div className="container">
          <header className="entry-header">
            <h2 className="entry-title">Our Products</h2>
          </header>
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

    </>
  );
}