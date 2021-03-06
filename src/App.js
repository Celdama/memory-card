import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import ScoreBoard from './components/ScoreBoard';
import { useSetLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [loadedChars, setLoadedChars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [listCharsId, setListCharsId] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    () => JSON.parse(localStorage.getItem('bestScore')) || 0
  );

  useSetLocalStorage(bestScore);

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
          selectedCharaters.map(({ name, image }) => ({
            name,
            image,
            id: nanoid(),
          }))
        );
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const resetGame = () => {
    setCurrentScore(0);
    setListCharsId([]);
  };

  const saveBestScore = () => {
    if (bestScore < currentScore) {
      setBestScore(currentScore);
    }
  };

  const incrementeScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const shuffleListChars = () => {
    setLoadedChars(loadedChars.sort(() => Math.random() - 0.5));
  };

  const handleAlreadyClickedChars = (id) => {
    setListCharsId((prevId) => [...prevId, id]);

    if (listCharsId.includes(id) && currentScore > bestScore) {
      saveBestScore();
      resetGame();
    } else if (listCharsId.includes(id)) {
      resetGame();
    } else {
      incrementeScore();
    }

    shuffleListChars();
  };

  let content = <p className='content'>Loading characters...</p>;

  if (!isLoading && loadedChars && loadedChars.length > 0) {
    content = (
      <Cards
        className='content'
        loadedChars={loadedChars}
        handleAlreadyClickedChars={handleAlreadyClickedChars}
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
