import { AccommodationData, Amenity } from '../types/accommodations';

const meetsCapacity = function (
  accommodation: AccommodationData,
  selectedCapacity: number,
): boolean {
  return selectedCapacity <= accommodation.capacity;
};

const meetsAllAmeneties = function (
  accommodation: AccommodationData,
  selectedAmenities: { [key: string]: boolean },
): boolean {
  return Object.entries(selectedAmenities).every(
    ([amenity, selected]) =>
      !selected || accommodation.amenities[amenity as Amenity],
  );
};

const meetsAvailableDates = function (
  accommodation: AccommodationData,
  startDate: string,
  endDate: string,
): boolean {
  return accommodation.availableDates.some((interval) => {
    const intervalStart = new Date(interval.intervalStart);
    const intervalEnd = new Date(interval.intervalEnd);
    const selectedStartDate = startDate ? new Date(startDate) : null;
    const selectedEndDate = endDate ? new Date(endDate) : null;

    return (
      !selectedStartDate ||
      !selectedEndDate ||
      (selectedStartDate >= intervalStart && selectedEndDate < intervalEnd)
    );
  });
};

export const filterAccommodation = (
  data: AccommodationData[] | undefined,
  selectedCapacity: number,
  selectedAmenities: { [key: string]: boolean },
  startDate: string,
  endDate: string,
): AccommodationData[] | undefined => {
  if (!data) return undefined;
  return data.filter(
    (accommodation) =>
      meetsCapacity(accommodation, selectedCapacity) &&
      meetsAllAmeneties(accommodation, selectedAmenities) &&
      meetsAvailableDates(accommodation, startDate, endDate),
  );
};
