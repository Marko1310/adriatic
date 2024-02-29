import useAxios from '../hooks/useAxios';
import { environment } from '../environment';
import { accommodation_api } from '../services/api_config';
import { AccommodationData } from '../types/accommodations';

function Main() {
  const [data, loading, error] = useAxios<AccommodationData>(
    accommodation_api,
    environment.getAccommodation,
  );

  console.log(data);

  if (loading) return <p>Loading...</p>;

  if (error !== '') return <p>{error}</p>;

  if (!data) return <p>No data</p>;

  return <div></div>;
}
export default Main;
