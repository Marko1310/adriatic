import { useState } from 'react';
import { AccommodationData } from '../types/accommodations';
import AdditionalInfo from './AdditionalInfo';

type AccommodationCardProps = {
  accommodation: AccommodationData;
};

function AccommodationCard({ accommodation }: AccommodationCardProps) {
  const {
    title,
    image,
    capacity,
    beachDistanceInMeters,
    amenities,
    pricelistInEuros,
    availableDates,
  } = accommodation;

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="h-fit w-full overflow-hidden rounded-md border-2 transition-all hover:shadow-md">
      <div className="relative flex h-36 gap-2">
        <div className="h-full w-4/12">
          <img src={image} alt={image} className="h-full w-full object-cover" />
        </div>
        <div className="flex w-8/12 flex-col">
          <h1 className="mb-3 text-base text-blue-500 lg:text-xl">{title}</h1>
          <div className="flex flex-col gap-2 pl-2 text-xs lg:text-sm">
            <p>Capacity: {capacity} person</p>
            {beachDistanceInMeters && (
              <p>Distance from beach: {beachDistanceInMeters}m</p>
            )}
          </div>
          <div
            onClick={handleClick}
            className="absolute bottom-2 right-2 flex gap-2 rounded-md border-2 p-2 text-xs hover:cursor-pointer"
          >
            <p>{expanded ? '↑' : '↓'}</p>
            <p>Amenities & prices</p>
          </div>
        </div>
      </div>

      <div
        className={`${expanded ? 'max-h-64' : 'max-h-0'} transition-all duration-300`}
      >
        <AdditionalInfo amenities={amenities} />
      </div>
    </div>
  );
}

export default AccommodationCard;
