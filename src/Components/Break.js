import React, { useState } from 'react';
import moment from 'moment';

function Break() {
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300); // 5min in sec

  const handleDecrementBreakLength = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 60;
    if (newBreakLengthInSeconds < 0) {
      setBreakLengthInSeconds(0);
    } else {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };

  const handleIncrementBreakLength = () => {
    setBreakLengthInSeconds(breakLengthInSeconds + 60);
  };

  const breakLengthInMinutes = moment
    .duration(breakLengthInSeconds, 's')
    .minutes();

  return (
    <div>
      <h1 id='break-label'>Break Lenght</h1>
      <button
        type='button'
        id='break-increment'
        onClick={handleIncrementBreakLength}
      >
        {' '}
        +{' '}
      </button>
      <span id='break-length'>{breakLengthInMinutes}</span>
      <button
        type='button'
        id='break-decrement'
        onClick={handleDecrementBreakLength}
      >
        {' '}
        -{' '}
      </button>
    </div>
  );
}

export default Break;
