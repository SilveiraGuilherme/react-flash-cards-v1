import Header from '../components/Header';
import Main from '../components/Main';
import FlashCards from '../components/FlashCards';
import FlashCard from '../components/FlashCard';
import { allFlashCards } from '../data/allFlashCards';
import Button from '../components/Button';
import { helperShuffleArray } from '../helpers/arrayHelpers';
import { useState } from 'react';
import RadioButton from '../components/RadioButton';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);
    setAllCards(shuffledCards);
  }

  function handleRadioShowTitle() {
    return setShowTitle(true);
  }
  function handleRadioShowDescription() {
    return setShowTitle(false);
  }

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className="text-center m-4">
          <Button onButtonClick={handleButtonClick}>Shuffle Cards</Button>
        </div>
        <div className="flex items-center justify-center gap-3 m-4">
          <RadioButton
            radioButtonName="showContent"
            radioButtonDescription="Show Title"
            onRadioButtonClick={handleRadioShowTitle}
            buttonChecked={showTitle}
          />
          <RadioButton
            radioButtonName="showContent"
            radioButtonDescription="Show Description"
            onRadioButtonClick={handleRadioShowDescription}
            buttonChecked={!showTitle}
          />
        </div>
        <FlashCards>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard key={id} title={title} description={description} />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
