/**
 * @param {*} price 
 * @param {*} previousPrice
 * @description This component is responsible for rendering the percentage off of a product
 * @returns the PricePercent component displaying the percentage off
 */

function PricePercent({ price, previousPrice }) {
  const percentOff = ((previousPrice - price) / previousPrice) * 100;
  if (percentOff <= 0) {
    return null;
    }
  return (
    <span className={percentOff > 0 ? 'price-percent' : 'price-no-percent'}>
      {percentOff.toFixed(0)}%
    </span>
  );
}

export default PricePercent;