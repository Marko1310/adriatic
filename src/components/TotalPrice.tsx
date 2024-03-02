type TotalPriceProps = {
  totalPrice: number;
};

function TotalPrice({ totalPrice }: TotalPriceProps) {
  return (
    <p>
      Total price is <span className="text-lg font-bold">{totalPrice}E</span>
    </p>
  );
}

export default TotalPrice;
