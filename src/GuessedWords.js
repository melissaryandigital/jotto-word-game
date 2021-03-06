import React from 'react';

const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test='guessed-instructions'>
        Try to guess the secret word!
      </span>
    );
  }

  return (
    <div data-test="component-guessed-words">
      {contents}
      </div>
  )
}

export default GuessedWords;