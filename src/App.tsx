import { useEffect, useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Main from './components/Main';
import Footer from './components/Footer';
import useAxios from './hooks/useAxios';
import { environment } from './environment';
import { accommodation_api } from './services/api_config';
import { filterAccommodation } from './utils/filterUtils';
import { AccommodationData, Amenity } from './types/accommodations';
import { nextDate } from './helper/dayHelper';

function App() {
  const [data, loading, error] = useAxios<AccommodationData[]>(
    accommodation_api,
    environment.getAccommodation,
  );

  const [filteredAccomodations, setFilteredAccommodations] =
    useState<AccommodationData[]>();
  const [selectedCapacity, setSelectedCapacity] = useState<number>(1);
  const [selectedAmenities, setSelectedAmenities] = useState({
    airConditioning: false,
    parkingSpace: false,
    pets: false,
    pool: false,
    wifi: false,
    tv: false,
  });
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const filteredData = filterAccommodation(
      data,
      selectedCapacity,
      selectedAmenities,
      startDate,
      endDate,
    );
    setFilteredAccommodations(filteredData);
  }, [data, selectedCapacity, selectedAmenities, startDate, endDate]);

  const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCapacity(Number(e.target.value));
  };

  const handleAmenitiesChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) => ({
      ...prev,
      [amenity]: !prev[amenity],
    }));
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedEndDate = e.target.value;
    setEndDate(
      selectedEndDate <= startDate ? nextDate(startDate) : selectedEndDate,
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Filter
        selectedAmenities={selectedAmenities}
        startDate={startDate}
        endDate={endDate}
        selectedCapacity={selectedCapacity}
        onCapacityChange={handleCapacityChange}
        onAmenitiesChange={handleAmenitiesChange}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
      />

      <Main
        data={filteredAccomodations}
        loading={loading}
        error={error}
        startDate={startDate}
        endDate={endDate}
      />
      <Footer />
    </div>
  );
}

export default App;
