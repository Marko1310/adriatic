import { Amenities, translatedAmenities } from '../types/accommodations';

type AmenitiesListProps = {
  amenities: Amenities;
};

function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">Dodatna ponuda:</h3>
      <ul className="flex flex-col gap-1 pl-2 md:flex-row md:flex-wrap">
        {Object.keys(amenities).map((key) => {
          const amenityKey = key as keyof Amenities;
          return (
            <li
              className={`border ${amenities[amenityKey] ? 'bg-green-200' : ''} text-xs`}
              key={key}
            >
              {translatedAmenities[amenityKey]}:{' '}
              {amenities[amenityKey] ? '✔️' : '❌'}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AmenitiesList;
