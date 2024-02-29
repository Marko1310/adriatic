import axios from 'axios';
import { environment } from '../environment';

const BASE_API_URL = environment.apiBaseUrl;

const accommodation_api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: false,
});

export { accommodation_api };
