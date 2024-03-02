import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Main from '../components/Main';
import Footer from '../components/Footer';
import useAxios from '../hooks/useAxios';
import useModal from '../hooks/useModal';
import { environment } from '../environment';
import { accommodation_api } from '../services/api_config';
import { filterAccommodation } from '../utils/filterUtils';
import { AccommodationData, Amenity } from '../types/accommodations';
import { nextDate } from '../helper/dayHelper';

function Application() {
  const [data, loading, error, getData] = useAxios<AccommodationData[]>(
    accommodation_api,
    environment.getAccommodation,
  );

  const [filteredAccommodations, setFilteredAccommodations] =
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
  const [reservationDetails, setReservationDetails] = useState({
    accommodationName: '',
    startDate: '',
    endDate: '',
    selectedCapacity: 0,
    totalPrice: 0,
  });

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

  const handleReservation = (accommodationName: string, totalPrice: number) => {
    setReservationDetails({
      startDate,
      endDate,
      selectedCapacity,
      accommodationName,
      totalPrice,
    });
    openModal();
  };

  const resetState = function () {
    getData();
    setStartDate('');
    setEndDate('');
    setSelectedAmenities({
      airConditioning: false,
      parkingSpace: false,
      pets: false,
      pool: false,
      wifi: false,
      tv: false,
    });
    setSelectedCapacity(1);
    setReservationDetails({
      accommodationName: '',
      startDate: '',
      endDate: '',
      selectedCapacity: 0,
      totalPrice: 0,
    });

    closeModal();
  };

  const reservationModalRef = useRef<HTMLDialogElement>(null);
  const { openModal } = useModal(reservationModalRef);
  const { closeModal } = useModal(reservationModalRef);

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
        data={filteredAccommodations}
        loading={loading}
        error={error}
        startDate={startDate}
        endDate={endDate}
        reservationDetails={reservationDetails}
        onReservation={handleReservation}
        reservationModalRef={reservationModalRef}
        resetState={resetState}
      />

      <Footer />
    </div>
  );
}

export default Application;
