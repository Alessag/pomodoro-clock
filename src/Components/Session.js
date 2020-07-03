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

function Session(props) {
  const {
    sessionLengthInSeconds,
    handleIncrementSessionLength,
    handleDecrementSessionLength,
  } = props;

  const sessionLengthInMinutes = moment
    .duration(sessionLengthInSeconds, 's')
    .asMinutes();

  return (
    <BreakSessionContainer>
      <BreakSessionLabel id='session-label'>Work</BreakSessionLabel>
      <PlusMinusButtonContainer>
        <BreakSessionButton
          id='session-decrement'
          type='button'
          onClick={handleDecrementSessionLength}
        >
          {' '}
          -{' '}
        </BreakSessionButton>
        <BreakSessionTime id='session-length'>
          {sessionLengthInMinutes}
        </BreakSessionTime>
        <BreakSessionButton
          id='session-increment'
          type='button'
          onClick={handleIncrementSessionLength}
        >
          {' '}
          +{' '}
        </BreakSessionButton>
      </PlusMinusButtonContainer>
    </BreakSessionContainer>
  );
}

Session.propTypes = {
  sessionLengthInSeconds: PropTypes.number.isRequired,
  handleIncrementSessionLength: PropTypes.func.isRequired,
  handleDecrementSessionLength: PropTypes.func.isRequired,
};

export default Session;
