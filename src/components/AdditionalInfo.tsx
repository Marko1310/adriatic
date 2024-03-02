import AmenitiesList from './AmenitiesList';
import PriceRange from './PriceRange';
import TotalPrice from './TotalPrice';
import { Amenities } from '../types/accommodations';

type AdditionalInfoProps = {
  amenities: Amenities;
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
  totalPrice: number;
  title: string;
  startDate: string;
  endDate: string;
  onReservation: (accommodationName: string, totalPrice: number) => void;
};

function AdditionalInfo({
  amenities,
  priceRange,
  totalPrice,
  title,
  startDate,
  endDate,
  onReservation,
}: AdditionalInfoProps) {
  const datesAreDefined = !!startDate && !!endDate;

  return (
    <div className="h-fit border-t-2 p-2 px-2 text-xs">
      <div className="flex justify-between">
        <AmenitiesList amenities={amenities} />
        <div className="flex min-w-fit flex-col items-end justify-end gap-1">
          {datesAreDefined && (
            <button
              className="rounded-md border bg-blue-500 p-2 font-semibold text-white hover:bg-blue-600"
              onClick={() => onReservation(title, totalPrice)}
            >
              Rezerviraj
            </button>
          )}

          {datesAreDefined ? (
            <TotalPrice totalPrice={totalPrice} />
          ) : (
            <PriceRange priceRange={priceRange} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
