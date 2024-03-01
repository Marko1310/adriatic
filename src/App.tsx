import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main';
import Footer from './components/Footer';
import useAxios from './hooks/useAxios';
import { environment } from './environment';
import { accommodation_api } from './services/api_config';
import { filterAccommodation } from './utils/filterUtils';
import { AccommodationData, Amenity } from './types/accommodations';

function App() {
  const [data, loading, error] = useAxios<AccommodationData[]>(
    accommodation_api,
    environment.getAccommodation,
  );

  const [filteredAccomodations, setFilteredAccommodations] =
    useState<AccommodationData[]>();
  const [selectedCapacity, setSelectedCapacity] = useState<number>(0);
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
    setSelectedCapacity(Number(e.target.value || 0));
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
    setEndDate(e.target.value);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Search
        selectedAmenities={selectedAmenities}
        startDate={startDate}
        onCapacityChange={handleCapacityChange}
        onAmenitiesChange={handleAmenitiesChange}
        onStartDateChange={handleStartDateChange}
        onEndDateChange={handleEndDateChange}
      />

      <Main data={filteredAccomodations} loading={loading} error={error} />
      <Footer />
    </div>
  );
}

export default App;
