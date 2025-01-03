import { useEffect, useState } from 'react';
import { FetchProductById } from "../../../api/fetch";
import { useParams } from 'react-router-dom';
import AddToCartBtn from '../Cart/AddToCartBtn';
import { Link } from 'react-router-dom';
import RatingStars from '../../RatingStars/RatingStars';
import MainProduct from './Product.styles';
import Price from '../../Price/Price';
import { StyledLoadingText } from '../Home/ProductList/ProductList.styles';

/**
 * @description the Product component fetches the product by id and displays the product image, info, tags, and reviews
 * @returns the Product component with the product image, info, tags, and reviews
 */

function Product() {
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        FetchProductById(id)
            .then((response) => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsError(true, err.message);
    })
    .finally(() => {
      setIsLoading(false);
    });

    }
    , [id]);



  if (isLoading || !data) {
    return <div><StyledLoadingText>Loading</StyledLoadingText></div>;
  }

  if (isError) {
    return <div>Error</div>;
  }


  function tags() {
    if (!data.tags) {
      return null;
    }
    return data.tags.map((tag) => <p className="tag" key={tag}>#{tag}</p>);
  }

  function reviews() {
    if (data.reviews.length === 0) {
      return <p>No reviews yet</p>;
    }
    return data.reviews.map((review) => (
      <div key={review.id}>
        <h4>{review.username}</h4>
        <RatingStars rating={review.rating} />
        <p>{review.description}</p>
      </div>
    ));
  }


  return (
    <MainProduct>
      <div className="product-image">
      <img src={data.image.url} alt={data.image.alt} />
      </div>
      <div className="product-info">
      <h1>{data.title}</h1>
      <RatingStars rating={data.rating} reviews={data.reviews.length} />
      <p>{data.description}</p>
      <Price price={data.price} discountedPrice={data.discountedPrice} />
      <Link to="/cart"><AddToCartBtn item={data} /></Link>
      <div className="tags">{tags()}</div>
      </div>
      <div className="reviews">
      <h2>Reviews</h2>
      {reviews()}
      </div>
    </MainProduct>
  );
}

export default Product;

