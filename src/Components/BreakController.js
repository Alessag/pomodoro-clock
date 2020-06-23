import React from 'react';
import PropTypes from 'prop-types';

function BreakController(props) {
  const { breakTime, handleBreakController } = props;
  return (
    <div>
      <h1>BreakController</h1>
      <button type='button' id='plus' onClick={handleBreakController}>
        {' '}
        +{' '}
      </button>
      <span>{breakTime}</span>
      <button type='button' id='subtract' onClick={handleBreakController}>
        {' '}
        -{' '}
      </button>
    </div>
  );
}

BreakController.propTypes = {
  breakTime: PropTypes.number.isRequired,
  handleBreakController: PropTypes.func.isRequired,
};

export default BreakController;
