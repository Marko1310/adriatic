import AccommodationList from './AccommodationList';
import LoadingDisplay from './LoadingDisplay';
import ErrorDisplay from './ErrorDisplay';
import { AccommodationData } from '../types/accommodations';

type MainProps = {
  data: AccommodationData[] | undefined;
  loading: boolean;
  error: string;
  startDate: string;
  endDate: string;
};

function Main({ data, loading, error, startDate, endDate }: MainProps) {
  if (loading) return <LoadingDisplay />;
  if (error !== '') return <ErrorDisplay error={error} />;

  return (
    <div className="flex justify-center overflow-auto">
      <AccommodationList
        accommodations={data}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}
export default Main;
