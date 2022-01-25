import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';

const App = () => {
  const [loadedChars, setLoadedChars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://akabab.github.io/starwars-api/api/all.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('failed to fetch');
        }
        return response.json();
      })
      .then((charData) => {
        const selectedCharaters = charData.slice(10, 20);
        setIsLoading(false);
        setLoadedChars(
          selectedCharaters.map((char, index) => ({
            name: char.name,
            image: char.image,
            id: char.id,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  let content = <p className='content'>Loading characters...</p>;

  if (!isLoading && loadedChars && loadedChars.length > 0) {
    content = <Cards className='content' loadedChars={loadedChars} />;
  } else if (!isLoading && (!loadedChars || loadedChars.length === 0)) {
    content = <p className='content'>Could not fetch any data.</p>;
  }

  return (
    <div className='App'>
      <Header />
      {content}
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
