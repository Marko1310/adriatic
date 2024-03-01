import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Search from './components/Search';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
