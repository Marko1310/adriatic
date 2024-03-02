import AccommodationList from './AccommodationList';
import LoadingDisplay from './LoadingDisplay';
import ErrorDisplay from './ErrorDisplay';
import Modal from '../shared/Modal';
import ReservationModal from './ReservationModal';
import { AccommodationData } from '../types/accommodations';
import { ReservationDetails } from '../types/reservations';

type MainProps = {
  data: AccommodationData[] | undefined;
  loading: boolean;
  error: string;
  startDate: string;
  endDate: string;
  reservationDetails: ReservationDetails;
  onReservation: (accommodationName: string, totalPrice: number) => void;
  reservationModalRef: React.RefObject<HTMLDialogElement>;
  resetState: () => void;
};

function Main({
  data,
  loading,
  error,
  startDate,
  endDate,
  reservationDetails,
  onReservation,
  reservationModalRef,
  resetState,
}: MainProps) {
  if (loading) return <LoadingDisplay />;
  if (error !== '') return <ErrorDisplay error={error} />;

  return (
    <div className="flex justify-center overflow-auto">
      <AccommodationList
        accommodations={data}
        startDate={startDate}
        endDate={endDate}
        onReservation={onReservation}
      />
      <Modal ref={reservationModalRef}>
        <ReservationModal
          reservationDetails={reservationDetails}
          resetState={resetState}
        />
      </Modal>
    </div>
  );
}
export default Main;
