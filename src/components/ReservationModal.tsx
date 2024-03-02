import { ReservationDetails } from '../types/reservations';

type ReservationModalProps = {
  reservationDetails: ReservationDetails;
  init: () => void;
};

function ReservationModal({ reservationDetails, init }: ReservationModalProps) {
  const {
    accommodationName,
    startDate,
    endDate,
    selectedCapacity,
    totalPrice,
  } = reservationDetails;
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <p className="pb-3 font-semibold">
          Uspješno ste rezervirali smještaj {accommodationName}
        </p>
        <p>
          Termin Boravka: od {startDate} do {endDate}
        </p>
        <p>Broj osoba: {selectedCapacity}</p>
        <p>
          Ukupna cijena: <span className="font-semibold">{totalPrice}E</span>{' '}
        </p>
      </div>
      <button
        className="rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600"
        onClick={init}
      >
        Povratak na početnu stranicu
      </button>
    </div>
  );
}

export default ReservationModal;
