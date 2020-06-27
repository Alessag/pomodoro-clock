import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import './styles/index.css';

momentDurationFormatSetup(moment);

function TimeLeft({ sessionLengthInSeconds }) {
  const [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);

  useEffect(() => {
    setTimeLeft(sessionLengthInSeconds);
  }, [sessionLengthInSeconds]);

  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss');

  return (
    <div className='timer'>
      <h1 id='timer-label'>Timer - Session</h1>
      <span className='timer__sesion'>Work</span>
      <span id='time-left' className='timer__countdown'>
        {formattedTimeLeft}
      </span>
    </div>
  );
}

TimeLeft.propTypes = {
  sessionLengthInSeconds: PropTypes.number.isRequired,
};

export default TimeLeft;
