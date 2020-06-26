import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';
import PropTypes from 'prop-types';
import './styles/index.css';

momentDurationFormatSetup(moment);

function TimeLeft({ sessionLengthInSeconds }) {
  // const [timeLeft] = useState(sessionLengthInSeconds);

  const formattedTimeLeft = moment
    .duration(sessionLengthInSeconds, 's')
    .format('mm:ss');

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
