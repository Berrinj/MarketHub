import { useEffect, useState } from 'react';
import { FetchProducts } from '../../../../api/fetch';
import ProductCard from '../ProductCard/ProductCard';
import { MainHome } from './ProductList.styles';
import SearchBar from '../SearchBar';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setIsLoading(true);
        FetchProducts()
            .then((response) => {
                if (response && Array.isArray(response.data)) {
                    setProducts(response.data);
                    setSearchResults(response.data);
                } else {
                    setError('Something went wrong displaying products. Please try again.');
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

    const handleSearch = (searchInput) => {
        const filterResults = products.filter((product) =>
            product.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(filterResults);
    }

    return (
        <MainHome>
            <SearchBar products={products} onSearch={handleSearch} />
        <div className="products">
            <h1>Products</h1>
            <ul className="product-cards">
                {searchResults.map((product) => (
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