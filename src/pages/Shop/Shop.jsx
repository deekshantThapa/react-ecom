import { useContext, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom"
import myContext from "../../context/Data/MyContext";

export default function Shop() {

    const [searchParams] = useSearchParams();
    const selectedCategory = searchParams.get('category');

    const context = useContext(myContext);
    const { product, loading} = context;

  return (
    <>
        <section className="category-products">
            <div className="container">
                <header className="entry-header">
                    {selectedCategory ? 
                        <h3 className="entry-title">{selectedCategory}</h3>
                        :
                        <h3 className="entry-title">All Products</h3>
                    }
                </header>
                {loading ? (
                    <div className="loader-wrap">
                    <span className="loader loader-big"></span>
                    <p>Loading products...</p>
                    </div>
                    ) : (
                    <div className="products-wrap">
                    {product &&
                        product
                        .filter((item) => {
                            if(selectedCategory){
                                return item.category === selectedCategory; 
                            }
                            return true;
                        })
                        .map((item, index) => {
                            const { title, price, imageUrl, id } = item;

                            return (
                            <div className="product" key={index}>
                                <Link
                                to={`product-detail/${id}`}
                                state={{ category: item.category }}
                                >
                                <figure>
                                    <img src={imageUrl} alt="" />
                                </figure>
                                <h5>
                                    {title.length > 30
                                    ? title.substring(0, 30) + "..."
                                    : title}
                                </h5>
                                <span>{price} $</span>
                                </Link>
                            </div>
                            );
                        })
                    }
                    </div>
                )}
            </div>
        </section>
    </>
  );
}