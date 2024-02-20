// LoaderSpinner.js
import React from 'react';
import { css } from '@emotion/react';
import { RotateLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoaderSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <RotateLoader css={override} size={20} color={'#123abc'} loading={true} />
    </div>
  );
};

export default LoaderSpinner;
