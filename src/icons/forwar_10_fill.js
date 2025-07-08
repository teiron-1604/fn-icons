import React from 'react';
import PropTypes from 'prop-types';

const Forwar10Fill = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <g clipPath="url(#clip0_523_24)">
        <path d="M12 2c2.588 0 4.949.985 6.724 2.598l.347.33c.253.253.585.608.929.98V4.5a1 1 0 112 0v4l-.002.031v.044l-.007.053a1.02 1.02 0 01-.045.195l-.012.034a.942.942 0 01-.048.107l-.014.023-.028.05-.028.04a.998.998 0 01-.033.043l-.02.025c-.008.01-.016.022-.026.032l-.03.03-.01.01-.033.031-.021.018-.02.015a1 1 0 01-.055.041c-.01.008-.022.015-.033.022a.988.988 0 01-.053.031l-.021.012a.99.99 0 01-.123.053l-.022.008-.046.014a.994.994 0 01-.065.017l-.018.002a1.004 1.004 0 01-.127.016l-.037.001L21 9.5h-4a1 1 0 110-2h1.747c-.41-.446-.81-.878-1.09-1.157l-.278-.265a8 8 0 100 11.844l.278-.265.075-.07a1.001 1.001 0 011.408 1.408l-.069.076-.347.331A9.966 9.966 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2z"></path>
        <path d="M9 9a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 9a2.5 2.5 0 012.5 2.5v2a2.5 2.5 0 01-5 0v-2A2.5 2.5 0 0114 9zm0 2a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_523_24">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Forwar10Fill.propTypes = {
  color: PropTypes.string
};

export default Forwar10Fill;
