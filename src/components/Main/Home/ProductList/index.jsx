import { useEffect, useState } from 'react';
import { FetchProducts } from '../../../../api/fetch';
import ProductCard from '../ProductCard/ProductCard';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        FetchProducts()
            .then((response) => {
                if (response && Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    setError('Unexpected response format');
                }
            })
            .catch((err) => setError(err.message));
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="products">
            <h1>Products</h1>
            <ul className="product-cards">
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard
                            img={product.image.url}
                            alt={product.image.alt} 
                            title={product.title}
                            description={product.description} 
                            price={product.price}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;