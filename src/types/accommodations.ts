export type AccommodationData = {
  id: number;
  title: string;
  image: string;
  capacity: number;
  beachDistanceInMeters: number;
  amenities: Amenities;
  pricelistInEuros: PriceList[];
  availableDates: AvailableDates[];
};

export type Amenities = {
  airConditioning: boolean;
  parkingSpace: boolean;
  pets: boolean;
  pool: boolean;
  wifi: boolean;
  tv: boolean;
};

export type PriceList = {
  intervalStart: string;
  intervalEnd: string;
  pricePerNight: number;
};

export type AvailableDates = {
  intervalStart: string;
  intervalEnd: string;
};

export type Amenity = keyof AccommodationData['amenities'];
export const amenitiesData: Amenity[] = [
  'airConditioning',
  'parkingSpace',
  'pets',
  'pool',
  'wifi',
  'tv',
];
export const translatedAmenities: Record<Amenity, string> = {
  airConditioning: 'Klima',
  parkingSpace: 'Parking',
  pets: 'Ljubimci',
  pool: 'Bazen',
  wifi: 'Wi-Fi',
  tv: 'Tv',
};
