import React from 'react';
import PropTypes from 'prop-types';

function Controls(props) {
  const { workTime, breakTime } = props;
  return (
    <div>
      <h1>App controls</h1>
      <div>
        <button type='button' id='reset'>
          Reset
        </button>
        <button type='button' id='start_stop'>
          Play/Pause
        </button>
        <button type='button' id='info'>
          Info
        </button>
      </div>
      <div>
        <button type='button'>{workTime}</button>
        <button type='button'>{breakTime}</button>
      </div>
    </div>
  );
}

Controls.propTypes = {
  workTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
};

export default Controls;
