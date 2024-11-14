import { useEffect, useState } from 'react';
import { FetchProducts } from '../../../../api/fetch';
import ProductCard from '../ProductCard/ProductCard';
import { MainHome } from './ProductList.styles';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        FetchProducts()
            .then((response) => {
                if (response && Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    setError('Unexpected response format');
                }
                setIsLoading(false);
            })
            .catch((err) => setError(err.message));
    }, []);

    if (isLoading) {
        return <div>Loading posts...</div>;
      }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <MainHome>
        <div className="products">
            <h1>Products</h1>
            <ul className="product-cards">
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard
                            id={product.id}
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
        </MainHome>
    );
}

export default ProductList;