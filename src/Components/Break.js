import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  BreakSessionContainer,
  BreakSessionLabel,
  BreakSessionButton,
  BreakSessionTime,
  PlusMinusButtonContainer,
} from '../ui/BreakSessionUi';

function Break(props) {
  const {
    breakLengthInSeconds,
    handleIncrementBreakLength,
    handleDecrementBreakLength,
  } = props;

  const breakLengthInMinutes = moment
    .duration(breakLengthInSeconds, 's')
    .asMinutes();

  return (
    <BreakSessionContainer>
      <BreakSessionLabel id='break-label'>Break</BreakSessionLabel>
      <PlusMinusButtonContainer>
        <BreakSessionButton
          type='button'
          id='break-decrement'
          onClick={handleDecrementBreakLength}
        >
          {' '}
          -{' '}
        </BreakSessionButton>
        <BreakSessionTime id='break-length'>
          {breakLengthInMinutes}
        </BreakSessionTime>

        <BreakSessionButton
          type='button'
          id='break-increment'
          onClick={handleIncrementBreakLength}
        >
          {' '}
          +{' '}
        </BreakSessionButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
}

Break.propTypes = {
  breakLengthInSeconds: PropTypes.number.isRequired,
  handleDecrementBreakLength: PropTypes.func.isRequired,
  handleIncrementBreakLength: PropTypes.func.isRequired,
};

export default Break;
