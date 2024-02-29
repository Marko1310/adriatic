import useAxios from '../hooks/useAxios';
import { environment } from '../environment';
import { accommodation_api } from '../services/api_config';
import { AccommodationDataArray } from '../types/accommodations';
import UnitCard from './UnitCard';

function Main() {
  const [data, loading, error] = useAxios<AccommodationDataArray>(
    accommodation_api,
    environment.getAccommodation,
  );

  if (loading) return <p className="h-full">Loading...</p>;

  if (error !== '') return <p>{error}</p>;

  if (!data) return <p>No data</p>;

  return (
    <div className="flex justify-center">
      <div className="flex w-full flex-col items-center gap-4 p-0 py-4 lg:w-[900px]">
        {data.map((unit) => {
          return <UnitCard key={unit.id} unitData={unit} />;
        })}
      </div>
    </div>
  );
}
export default Main;
