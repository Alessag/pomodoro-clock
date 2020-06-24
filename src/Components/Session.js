import React, { useState } from 'react';
import moment from 'moment';

function Session() {
  const [sessionLengthInSeconds, setsessionLengthInSeconds] = useState(60 * 25); // 25min in sec

  const handleDecrementSessionLength = () => {
    const newsessionLengthInSeconds = sessionLengthInSeconds - 60;
    if (newsessionLengthInSeconds < 0) {
      setsessionLengthInSeconds(0);
    } else {
      setsessionLengthInSeconds(newsessionLengthInSeconds);
    }
  };

  const handleIncrementSessionLength = () => {
    setsessionLengthInSeconds(sessionLengthInSeconds + 60);
  };

  const sessionLengthInMinutes = moment
    .duration(sessionLengthInSeconds, 's')
    .minutes();

  return (
    <div>
      <h1 id='session-label'>WorkController - Session Label</h1>
      <button
        id='session-increment'
        type='button'
        onClick={handleIncrementSessionLength}
      >
        {' '}
        +{' '}
      </button>
      <span>{sessionLengthInMinutes}</span>
      <button
        id='session-decrement'
        type='button'
        onClick={handleDecrementSessionLength}
      >
        {' '}
        -{' '}
      </button>
    </div>
  );
}

export default Session;
