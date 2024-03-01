import AccommodationList from './AccommodationList';
import LoadingDisplay from './LoadingDisplay';
import ErrorDisplay from './ErrorDisplay';
import { AccommodationData } from '../types/accommodations';

type MainProps = {
  data: AccommodationData[] | undefined;
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
