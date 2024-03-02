import { Amenities } from '../types/accommodations';
import AmenitiesList from './AmenitiesList';
import PriceRange from './PriceRange';
import TotalPrice from './TotalPrice';

type AdditionalInfoProps = {
  amenities: Amenities;
  priceRange: {
    minPrice: number;
    maxPrice: number;
  };
  totalPrice: number;
  datesAreDefined: boolean;
};

function AdditionalInfo({
  amenities,
  priceRange,
  totalPrice,
  datesAreDefined,
}: AdditionalInfoProps) {
  return (
    <div className="h-fit border-t-2 p-2 px-2 text-xs">
      <div className="flex justify-between">
        <AmenitiesList amenities={amenities} />
        <div className="flex min-w-fit flex-col items-end justify-end gap-1">
          <button
            className="rounded-md border bg-blue-500 p-2 font-semibold text-white hover:bg-blue-600 disabled:bg-slate-500"
            disabled={!datesAreDefined}
          >
            Reservation
          </button>
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
