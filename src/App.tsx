import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';
import useAxios from './hooks/useAxios';
import { environment } from './environment';
import { accommodation_api } from './services/api_config';
import { AccommodationData } from './types/accommodations';

function App() {
  const [data, loading, error] = useAxios<AccommodationData[]>(
    accommodation_api,
    environment.getAccommodation,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Search />
      <Main data={data} loading={loading} error={error} />
      <Footer />
    </div>
  );
}

export default App;
