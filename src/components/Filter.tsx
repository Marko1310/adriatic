import { nextDate } from '../helper/dayHelper';
import { Amenity } from '../types/accommodations';
import AmenityFilter from './AmenityFilter';

type FilterProps = {
  selectedAmenities: { [key: string]: boolean };
  startDate: string;
  endDate: string;
  selectedCapacity: number;
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
  endDate,
  selectedCapacity,
  onCapacityChange,
  onAmenitiesChange,
  onStartDateChange,
  onEndDateChange,
}: FilterProps) {
  return (
    <div className="sticky top-0 z-10 flex justify-center">
      <div className=" flex w-full flex-col items-start justify-between gap-4 rounded-md bg-yellow-300 p-1 md:flex-row md:p-3 lg:w-[900px]">
        <div className="flex items-center justify-start gap-1">
          <span className="text-xs">Guests:</span>
          <input
            className="h-12 w-12 rounded-md p-2 text-center text-sm"
            type="number"
            min={1}
            onChange={onCapacityChange}
            placeholder="Guests"
            value={selectedCapacity}
          />

          <div className="flex gap-0">
            <input
              className="h-12 rounded-l-md border-r p-2 text-xs"
              min={datesRange.min}
              max={datesRange.max}
              type="date"
              onChange={onStartDateChange}
              value={startDate}
            />
            <input
              className="h-12 rounded-r-md p-2 text-xs"
              max={datesRange.max}
              type="date"
              disabled={startDate === '' ? true : false}
              min={startDate ? nextDate(startDate) : ''}
              onChange={onEndDateChange}
              value={endDate > startDate ? endDate : ''}
            />
          </div>
        </div>
        <div className="flex justify-start gap-5 align-middle text-xs">
          <p className="font-semibold">Filter:</p>
          <div className="flex gap-4">
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
