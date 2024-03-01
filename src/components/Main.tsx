import AccommodationList from './AccommodationList';
import LoadingDisplay from './LoadingDisplay';
import ErrorDisplay from './ErrorDisplay';
import { AccommodationDataArray } from '../types/accommodations';

type MainProps = {
  data: AccommodationDataArray | undefined;
  loading: boolean;
  error: string;
};

function Main({ data, loading, error }: MainProps) {
  if (loading) return <LoadingDisplay />;
  if (error !== '') return <ErrorDisplay error={error} />;

  return (
    <div className="flex justify-center overflow-auto">
      <AccommodationList accommodations={data} />
    </div>
  );
}
export default Main;
