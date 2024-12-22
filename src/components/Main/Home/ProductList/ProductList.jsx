import { useEffect, useState } from 'react';
import { FetchProducts } from '../../../../api/fetch';
import ProductCard from '../ProductCard/ProductCard';
import { MainHome, StyledLoadingText } from './ProductList.styles';
import SearchBar from '../SearchBar';

/**
 * @description the ProductList component uses the FetchProducts function to fetch the products and display them in the ProductCard component. It displays matching products on typing in the searchbar
 * @returns the ProductList component
 */

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
        return <span><StyledLoadingText>Loading products...</StyledLoadingText></span>;
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
            <ul className="product-cards">
                {searchResults.map((product) => (
                    <li key={product.id}>
                        <ProductCard
                            id={product.id}
                            img={product.image.url}
                            alt={product.image.alt} 
                            title={product.title}
                            rating={product.rating}
                            reviews={product.reviews.length}
                            description={product.description} 
                            price={product.price}
                            discountedPrice={product.discountedPrice}
                        />
                    </li>
                ))}
            </ul>
        </div>
        </MainHome>
    );
}

export default ProductList;