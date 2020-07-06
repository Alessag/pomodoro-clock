import React from 'react';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

function Modal({ handleInfoButtonClick }) {
  return (
    <div className='modal fixed block top-0 left-0 bottom-0 w-full h-full z-10 items-baseline'>
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal absolute left-0 right-0 overflow-hidden my-20 mx-auto lg:w-1/4 w-3/4 z-40'>
        <div className='mb-8'>
          <div className='flex justify-end'>
            <button type='button'>
              <GrFormClose
                onClick={handleInfoButtonClick}
                size='2rem'
                className='flex cursor-pointer'
              />
            </button>
          </div>
          <div className='text-gray-900 font-bold text-xl mb-2'>
            Pomodoro Clock
          </div>
          <p className='text-gray-700 text-base'>
            The pomodoro technique is a time management method that uses a timer
            to break down work into intervals separated by short breaks.
          </p>
        </div>
        <div className='flex items-center'>
          <img
            className='w-10 h-10 rounded-full mr-4'
            src='https://avatars2.githubusercontent.com/u/17497470?s=460&u=c196f5794f01693344d53ac403cf22660b626b59&v=4'
            alt='Alessandra Amicarella'
          />
          <div className='text-sm'>
            <p className='text-gray-900 leading-none'>Alessandra Amicarella</p>
            <div className='text-gray-600 flex mt-2'>
              <a
                href='https://www.linkedin.com/in/alessandraamicarella'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillLinkedin size='1.5rem' className='mr-2' />
              </a>
              <a
                href='https://www.github.com/Alessag'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub size='1.5rem' className='mr-2' />
              </a>
              <a
                href='https://www.instagram.com/amicarellaa'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineInstagram size='1.5rem' className='mr-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='modal__overlay w-full h-full z-10 bg-gray-100 opacity-75' />
    </div>
  );
}

Modal.propTypes = {
  handleInfoButtonClick: PropTypes.func.isRequired,
};

export default Modal;
