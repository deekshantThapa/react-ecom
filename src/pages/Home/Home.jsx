import { useContext, useState } from "react"
import myContext from "../../context/Data/MyContext"
import { Link } from "react-router-dom";

export default function Home() {

  const context = useContext(myContext);
  const {product, loading} = context;

  // filter products
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>

      <section className="all-products">
        <div className="container">
          <header className="entry-header">
            <h2 className="entry-title">Our Products</h2>
          </header>
          <div className="filter-category">
            <h3>Filter by Category</h3>
            <button
            onClick={() => setSelectedCategory('All')}
            className={`btn-secondary ${selectedCategory === 'All' ? 'active' : ''}`}
            >
              All
            </button>
            <button
            onClick={() => setSelectedCategory('Electronics')}
            className={`btn-secondary ${selectedCategory === 'Electronics' ? 'active' : ''}`}
            >
              Electronics
            </button>
            <button
            onClick={() => setSelectedCategory('Clothing')}
            className={`btn-secondary ${selectedCategory === 'Clothing' ? 'active' : ''}`}
            >
              Clothing
            </button>
          </div>
          {loading && (
            <div className="loader-wrap">
              <span className="loader loader-big"></span>
              <p>Fetching products</p>
            </div>
          )}
          <div className="products-wrap">
            {product &&
              product.filter(item => 
                selectedCategory === 'All' ? true : item.category === selectedCategory
              )
              .map((item, index) => {
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