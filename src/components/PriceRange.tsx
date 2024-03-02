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
          Cijena po noćenju:{' '}
          <span className="font-semibold">{priceRange?.minPrice}E</span>
        </p>
      ) : (
        <p>
          Raspon cijena:{' '}
          <span className="font-semibold">{priceRange?.minPrice}E</span> do{' '}
          <span className="font-semibold">{priceRange?.maxPrice}E</span> po
          noćenju
        </p>
      )}

      <p>Molimo odaberite datume za prikaz ukupne cijene</p>
    </div>
  );
}

export default PriceRange;
