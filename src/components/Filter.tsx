import { Amenity } from '../types/accommodations';
import AmenityFilter from './AmenityFilter';

type FilterProps = {
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

function Filter({
  selectedAmenities,
  startDate,
  onCapacityChange,
  onAmenitiesChange,
  onStartDateChange,
  onEndDateChange,
}: FilterProps) {
  return (
    <div className="sticky top-0 z-10 flex justify-center">
      <div className=" flex w-full flex-col items-center justify-between gap-6 rounded-md bg-yellow-300 p-1 lg:w-[900px] lg:p-3">
        <div className="flex w-full justify-between gap-1">
          <input
            className="h-12 w-24 rounded-md p-2 text-sm"
            type="number"
            min={1}
            onChange={onCapacityChange}
            placeholder="Guests"
          />
          <div className="flex gap-0">
            <input
              className="h-12 rounded-l-md border-r p-2 text-xs"
              min={datesRange.min}
              max={datesRange.max}
              type="date"
              onChange={onStartDateChange}
            />
            <input
              className="h-12 rounded-r-md p-2 text-xs"
              max={datesRange.max}
              type="date"
              disabled={startDate === '' ? true : false}
              min={
                startDate ? new Date(startDate).toISOString().split('T')[0] : ''
              }
              onChange={onEndDateChange}
            />
          </div>
        </div>
        <div className="flex w-full justify-start gap-5 align-middle text-xs">
          <p className="font-semibold">Filter:</p>
          <div className="flex flex-wrap gap-4">
            <AmenityFilter
              selectedAmenities={selectedAmenities}
              onAmenitiesChange={onAmenitiesChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
