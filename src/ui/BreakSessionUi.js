/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

export const BreakSessionContainer = ({ children, ...props }) => {
  return (
    <div className='flex flex-col' {...props}>
      {children}
    </div>
  );
};

export const BreakSessionLabel = ({ children, ...props }) => {
  return (
    <p className='text-base text-center' {...props}>
      {children}
    </p>
  );
};

export const BreakSessionButton = ({ children, ...props }) => {
  return (
    <button
      type='button'
      className='w-6 h-6 items-center justify-center ml-2 mr-2'
      {...props}
    >
      {children}
    </button>
  );
};

export const BreakSessionTime = ({ children, ...props }) => {
  return (
    <p className='text-lg font-light ' {...props}>
      {children}
    </p>
  );
};

export const PlusMinusButtonContainer = ({ children, ...props }) => {
  return (
    <div className='grid grid-flow-col gap-2 rounded' {...props}>
      {children}
    </div>
  );
};
