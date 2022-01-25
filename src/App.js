import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Cards />
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
