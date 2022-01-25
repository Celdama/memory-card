import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import ScoreBoard from './components/ScoreBoard';

const App = () => {
  const [loadedChars, setLoadedChars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCharsId, setCurrentCharsId] = useState('');
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

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
            id: nanoid(),
          }))
        );
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const saveBestScore = () => {
    if (bestScore < currentScore) {
      setBestScore(currentScore);
      setCurrentScore(0);
    } else {
      setCurrentScore(0);
    }
  };

  const incrementeScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const handleCurrentChars = (id) => {
    setCurrentCharsId((prevId) => {
      if (prevId === id) {
        saveBestScore();
        return '';
      } else {
        incrementeScore();
        return id;
      }
    });
  };

  let content = <p className='content'>Loading characters...</p>;

  if (!isLoading && loadedChars && loadedChars.length > 0) {
    content = (
      <Cards
        className='content'
        loadedChars={loadedChars}
        handleCurrentChars={handleCurrentChars}
      />
    );
  } else if (!isLoading && (!loadedChars || loadedChars.length === 0)) {
    content = <p className='content'>Could not fetch any data.</p>;
  }

  return (
    <div className='App'>
      <Header />
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      {content}
      <Footer />
      <GlobalStyle />
    </div>
  );
};

export default App;
