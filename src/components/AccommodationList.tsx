import AccommodationCard from './AccommodationCard';
import { AccommodationDataArray } from '../types/accommodations';

type AccommodationListProps = {
  accommodations: AccommodationDataArray | undefined;
};

function AccommodationList({ accommodations }: AccommodationListProps) {
  return (
    <div className="flex w-full flex-col items-center gap-4 p-0 py-4 lg:w-[900px]">
      {accommodations?.map((accommodation) => {
        return (
          <AccommodationCard
            key={accommodation.id}
            accommodation={accommodation}
          />
        );
      })}
    </div>
  );
}

export default AccommodationList;