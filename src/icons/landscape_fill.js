import React from 'react';
import PropTypes from 'prop-types';

const LandscapeFill = props => {
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
      <g clipPath="url(#clip0_18_15811)">
        <path d="M2.627 15.958c2.897-1.726 6.355-1.232 8.57.208l.225.15c2.733 1.936 6.946 2.687 10.279.627l1.247 3.741A1.002 1.002 0 0122 22H2a1.001 1.001 0 01-.948-1.316l1.575-4.726zM7.928 2.003c.404-.028.785.189.966.55l3.38 6.76 4.019-4.02.096-.084a1.001 1.001 0 011.559.475l3.097 9.29c-2.459 1.79-5.856 1.425-8.233-.129l-.236-.16-.001-.002-.277-.188c-2.29-1.49-5.645-2.185-8.81-1.124L7.052 2.684l.058-.138a1 1 0 01.82-.543z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15811">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LandscapeFill.propTypes = {
  color: PropTypes.string
};

export default LandscapeFill;
