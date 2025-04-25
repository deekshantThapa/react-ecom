import { useNavigate } from "react-router-dom";

export default function Home() {

  // define product categories
  const productCategories = [
    {
      title: 'Electronics',
      image: '/category-img/electronics.jpg'
    },
    {
      title: 'Clothing',
      image: '/category-img/clothing.jpg'
    }
  ];

  const navigate = useNavigate();

  return (
    <>

      <section className="home">
        <div className="container">
          <header className="entry-header">
            <h2 className="entry-title">Browse By Category</h2>
          </header>
          <div className="category-item-list">
            {productCategories.map((category, index) => (
              <div className="category-item"
                key={index}
                onClick={() => navigate(`/shop?category=${category.title}`)}
              >
                <figure>
                  <img src={category.image} alt="" />
                </figure>
                <h4 className="entry-title">{category.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}



{/* <div className="products-wrap">
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
                      <span>{price} $</span>
                    </Link>
                  </div>
                );
              })}
</div> */}