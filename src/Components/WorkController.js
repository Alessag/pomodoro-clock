import React from 'react';
import PropTypes from 'prop-types';

function WorkController(props) {
  const { workTime, handleWorkController } = props;
  return (
    <div>
      <h1>WorkController</h1>
      <button id='plus' type='button' onClick={handleWorkController}>
        {' '}
        +{' '}
      </button>
      <span>{workTime}</span>
      <button id='subtract' type='button' onClick={handleWorkController}>
        {' '}
        -{' '}
      </button>
    </div>
  );
}

WorkController.propTypes = {
  workTime: PropTypes.number.isRequired,
  handleWorkController: PropTypes.func.isRequired,
};

export default WorkController;
