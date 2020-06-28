import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
// import './styles/index.css';

momentDurationFormatSetup(moment);

function TimeLeft({ timeLeft, timerLabel }) {
  const formattedTimeLeft = moment
    .duration(timeLeft, 's')
    .format('mm:ss', { trim: false });

  return (
    <div className='timer'>
      <h1 id='timer-label'>{timerLabel}</h1>
      <span className='timer__sesion'>Work</span>
      <span id='time-left' className='timer__countdown'>
        {formattedTimeLeft}
      </span>
    </div>
  );
}

TimeLeft.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  timerLabel: PropTypes.number.isRequired,
};
export default TimeLeft;
