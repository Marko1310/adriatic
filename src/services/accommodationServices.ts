import { accommodation_api } from './api_config';
import { environment } from '../environment';

const getAllAccommodation = async () => {
  return await accommodation_api.get(environment.getAccommodation);
};

export default getAllAccommodation;
