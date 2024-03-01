import { Amenity, amenitiesData } from '../types/accommodations';

type SearchProps = {
  selectedAmenities: { [key: string]: boolean };
  startDate: string;
  onCapacityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAmenitiesChange: (amenity: Amenity) => void;
  onStartDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEndDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const datesRange = {
  min: '2024-01-01',
  max: '2024-12-31',
};

function Search({
  selectedAmenities,
  startDate,
  onCapacityChange,
  onAmenitiesChange,
  onStartDateChange,
  onEndDateChange,
}: SearchProps) {
  return (
    <div className="sticky top-0 z-10 flex justify-center">
      <div className=" flex w-full flex-col items-center justify-between gap-2 rounded-md bg-yellow-300 p-3 lg:w-[900px]">
        <div className="flex w-full justify-between">
          <input
            className="border-2 border-red-600"
            type="number"
            min={1}
            onChange={onCapacityChange}
          />
          <input
            min={datesRange.min}
            max={datesRange.max}
            type="date"
            onChange={onStartDateChange}
          />
          <input
            max={datesRange.max}
            type="date"
            disabled={startDate === '' ? true : false}
            min={
              startDate ? new Date(startDate).toISOString().split('T')[0] : ''
            }
            onChange={onEndDateChange}
          />
        </div>
        <div className="flex w-full flex-wrap justify-start gap-4 align-middle text-xs">
          {amenitiesData.map((amenity) => (
            <div key={amenity}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedAmenities[amenity]}
                  onChange={() => onAmenitiesChange(amenity)}
                />
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
