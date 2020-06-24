import React, { useState } from 'react';
import Controls from './Components/Controls';
import Timer from './Components/Timer';
import Break from './Components/Break';
import Session from './Components/Session';
import './App.css';

function App() {
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

  return (
    <div className='app'>
      <h1 className='app__title'>Pomodoro Clock</h1>
      <Timer />
      <Session
        sessionLengthInSeconds={sessionLengthInSeconds}
        handleIncrementSessionLength={handleIncrementSessionLength}
        handleDecrementSessionLength={handleDecrementSessionLength}
      />
      <Break />
      <Controls />
    </div>
  );
}

export default App;
