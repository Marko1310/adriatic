import { Amenity, amenitiesData } from '../types/accommodations';

type AmenityFilterProps = {
  selectedAmenities: { [key: string]: boolean };
  onAmenitiesChange: (amenity: Amenity) => void;
};

function AmenityFilter({
  selectedAmenities,
  onAmenitiesChange,
}: AmenityFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {amenitiesData.map((amenity) => (
        <label className="flex items-center gap-1" key={amenity}>
          <input
            type="checkbox"
            checked={selectedAmenities[amenity]}
            onChange={() => onAmenitiesChange(amenity)}
          />
          {amenity}
        </label>
      ))}
    </div>
  );
}

export default AmenityFilter;
