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