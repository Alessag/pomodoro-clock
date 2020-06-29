import React, { useState, useEffect, useRef } from 'react';
import TimeLeft from './Components/TimeLeft';
import Session from './Components/Session';
import Break from './Components/Break';
import Controls from './Components/Controls';
import './App.css';

function App() {
  const audioElement = useRef(null);
  const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(60 * 25); // 25min in sec
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300); // 5min in sec
  const [currentSessionType, setCurrentSessionType] = useState('Session'); // Session or Break
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);
  const isStarted = intervalId !== null;

  useEffect(() => {
    setTimeLeft(sessionLengthInSeconds);
  }, [sessionLengthInSeconds]);

  /**
   * Session Lenght methods
   */
  const handleIncrementSessionLength = () => {
    const newIncrementSession = sessionLengthInSeconds + 60;
    if (newIncrementSession <= 60 * 60) {
      setSessionLengthInSeconds(newIncrementSession);
    }
  };

  const handleDecrementSessionLength = () => {
    const newSessionLengthInSeconds = sessionLengthInSeconds - 60;
    if (newSessionLengthInSeconds > 0) {
      setSessionLengthInSeconds(newSessionLengthInSeconds);
    }
  };

  /**
   * Break Lenght Methods
   */
  const handleIncrementBreakLength = () => {
    const newBreakLength = breakLengthInSeconds + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLengthInSeconds(newBreakLength);
    }
  };

  const handleDecrementBreakLength = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 60;
    if (newBreakLengthInSeconds > 0) {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };

  const handleStartStopClick = () => {
    if (isStarted) {
      // If we are in started mode, we want to stop the time
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      // If we are in stoped mode, we want decrement timeLeft
      // Decrement timeLeft by one every second ( 1s = 1000ms)
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          }

          audioElement.current.play();

          if (currentSessionType === 'Session') {
            setCurrentSessionType('Break');
            return breakLengthInSeconds;
          }
          if (currentSessionType === 'Break') {
            setCurrentSessionType('Session');
            return sessionLengthInSeconds;
          }
          return prevTimeLeft;
        });
      }, 10);
      setIntervalId(newIntervalId);
    }
  };

  /**
   * Handle Reset Button
   */
  const handleResetButtonClick = () => {
    audioElement.current.load();
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType('Session');
    setSessionLengthInSeconds(60 * 25);
    setBreakLengthInSeconds(300);
    setTimeLeft(60 * 25);
  };

  return (
    <div className='app'>
      <h1 className='app__title'>Pomodoro Clock</h1>
      <TimeLeft timeLeft={timeLeft} timerLabel={currentSessionType} />
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
      <Controls
        isStarted={isStarted}
        handleStartStopClick={handleStartStopClick}
        handleResetButtonClick={handleResetButtonClick}
      />
      <audio id='beep' ref={audioElement}>
        <source
          src='https://onlineclock.net/audio/options/default.mp3'
          type='audio/mpeg'
        />
        <track
          src='https://onlineclock.net/audio/options/default.mp3'
          kind='captions'
          label='timmer_captions'
        />
      </audio>
    </div>
  );
}

export default App;
