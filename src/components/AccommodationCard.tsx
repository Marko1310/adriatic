import { useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import { AccommodationData } from '../types/accommodations';
import { calculatePriceRange, calculateTotalPrice } from '../utils/priceUtils';

type AccommodationCardProps = {
  accommodation: AccommodationData;
  startDate: string;
  endDate: string;
};

function AccommodationCard({
  accommodation,
  startDate,
  endDate,
}: AccommodationCardProps) {
  const {
    title,
    image,
    capacity,
    beachDistanceInMeters,
    amenities,
    pricelistInEuros,
  } = accommodation;

  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  const priceRange = calculatePriceRange(pricelistInEuros);
  const totalPrice = calculateTotalPrice(pricelistInEuros, startDate, endDate);
  const datesAreDefined = !!startDate && !!endDate;

  return (
    <div className="h-fit w-full overflow-hidden rounded-md border transition-all hover:shadow-md">
      <div className="relative flex h-36 gap-2">
        <div className="h-full w-4/12">
          <img src={image} alt={image} className="h-full w-full object-cover" />
        </div>
        <div className="flex w-8/12 flex-col">
          <h1 className="mb-3 text-base text-blue-500 lg:text-xl">{title}</h1>
          <div className="flex flex-col gap-2 pl-2 text-xs lg:text-sm">
            <p>Kapacitet: {capacity} guest</p>
            {beachDistanceInMeters && (
              <p>Udaljenost od plaže: {beachDistanceInMeters}m</p>
            )}
          </div>
          <div
            onClick={handleClick}
            className="absolute bottom-2 right-2 flex gap-2 rounded-md border p-2 text-xs hover:cursor-pointer"
          >
            <p>{expanded ? '↑' : '↓'}</p>
            <p>Dodatna ponuda i cijene</p>
          </div>
        </div>
      </div>

      <div
        className={`${expanded ? 'max-h-64' : 'max-h-0'} transition-all duration-300`}
      >
        <AdditionalInfo
          amenities={amenities}
          priceRange={priceRange}
          totalPrice={totalPrice}
          datesAreDefined={datesAreDefined}
        />
      </div>
    </div>
  );
}

export default AccommodationCard;
