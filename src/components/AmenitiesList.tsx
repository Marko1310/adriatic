import { Amenities } from '../types/accommodations';

type AmenitiesListProps = {
  amenities: Amenities;
};

function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-semibold">Amenities:</h3>
      <ul className="flex flex-col gap-1 pl-2 md:flex-row md:flex-wrap">
        {Object.entries(amenities).map(([key, value]) => (
          <li
            className={`border ${value ? 'bg-green-200' : ''} text-xs`}
            key={key}
          >
            {key}: {value ? '✔️' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AmenitiesList;
