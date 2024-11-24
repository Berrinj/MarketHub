import { useEffect, useState } from 'react';
import { FetchProductById } from "../../../api/fetch";
import { useParams } from 'react-router-dom';
import AddToCartBtn from '../Cart/AddToCartBtn';
import { Link } from 'react-router-dom';
import RatingStars from '../../RatingStars/RatingStars';


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
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image.url} alt={data.image.alt} />
      <RatingStars rating={data.rating} />
      <p>{data.description}</p>
      <p>{data.price}</p>
      <Link to="/cart"><AddToCartBtn item={data} /></Link>
    </div>
  );
}

export default Product;

