import AccommodationCard from './AccommodationCard';
import { AccommodationData } from '../types/accommodations';

type AccommodationListProps = {
  accommodations: AccommodationData[] | undefined;
  startDate: string;
  endDate: string;
};

function AccommodationList({
  accommodations,
  startDate,
  endDate,
}: AccommodationListProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-0 py-4 lg:w-[900px]">
      {accommodations?.map((accommodation) => {
        return (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </div>
  );
}

export default AccommodationList;
