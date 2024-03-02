type PriceRangeProps = {
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
};

function PriceRange({ priceRange }: PriceRangeProps) {
  return (
    <div className="flex flex-col items-end ">
      {priceRange.minPrice === priceRange.maxPrice ? (
        <p>
          Price per night:{' '}
          <span className="font-semibold">{priceRange?.minPrice}E</span>
        </p>
      ) : (
        <p>
          Price range:{' '}
          <span className="font-semibold">{priceRange?.minPrice}E</span> to{' '}
          <span className="font-semibold">{priceRange?.maxPrice}E</span> per
          night
        </p>
      )}

      <p>Please choose dates for full price</p>
    </div>
  );
}

export default PriceRange;
