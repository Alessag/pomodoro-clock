import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

function TimeLeft({ timeLeft, timerLabel }) {
  const formattedTimeLeft = moment
    .duration(timeLeft, 's')
    .format('mm:ss', { trim: false });

  return (
    <div className='timer flex flex-col justify-center items-center w-48 h-48 rounded-full border-white  border-2  mb-4'>
      <h1 id='timer-label' className='font-light'>
        {timerLabel}
      </h1>
      {/* <span className='timer__sesion'>Work</span> */}
      <span id='time-left' className='text-5xl font-light'>
        {formattedTimeLeft}
      </span>
    </div>
  );
}

TimeLeft.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  timerLabel: PropTypes.string.isRequired,
};
export default TimeLeft;
