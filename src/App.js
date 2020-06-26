import React, { useState } from 'react';
import Controls from './Components/Controls';
import Session from './Components/Session';
import Break from './Components/Break';
import TimeLeft from './Components/TimeLeft';
import './App.css';

function App() {
  const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(60 * 25); // 25min in sec
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300); // 5min in sec

  /**
   * Session Lenght methods
   */
  const handleIncrementSessionLength = () => {
    setSessionLengthInSeconds(sessionLengthInSeconds + 60);
  };

  const handleDecrementSessionLength = () => {
    const newSessionLengthInSeconds = sessionLengthInSeconds - 60;
    if (newSessionLengthInSeconds < 0) {
      setSessionLengthInSeconds(0);
    } else {
      setSessionLengthInSeconds(newSessionLengthInSeconds);
    }
  };

  /**
   * Break Lenght Methods
   */
  const handleIncrementBreakLength = () => {
    setBreakLengthInSeconds(breakLengthInSeconds + 60);
  };

  const handleDecrementBreakLength = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 60;
    if (newBreakLengthInSeconds < 0) {
      setBreakLengthInSeconds(0);
    } else {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };

  return (
    <div className='app'>
      <h1 className='app__title'>Pomodoro Clock</h1>
      <TimeLeft sessionLengthInSeconds={sessionLengthInSeconds} />
      <Session
        sessionLengthInSeconds={sessionLengthInSeconds}
        handleIncrementSessionLength={handleIncrementSessionLength}
        handleDecrementSessionLength={handleDecrementSessionLength}
      />
      <Break
        breakLengthInSeconds={breakLengthInSeconds}
        handleIncrementBreakLength={handleIncrementBreakLength}
        handleDecrementBreakLength={handleDecrementBreakLength}
      />
      <Controls />
    </div>
  );
}

export default App;
