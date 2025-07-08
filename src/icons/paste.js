import React from 'react';
import PropTypes from 'prop-types';

const Paste = props => {
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
      <g clipPath="url(#clip0_867_90)">
        <path d="M16.5 7.906a.406.406 0 00-.406-.406H3.906a.406.406 0 00-.406.406v12.188c0 .224.182.406.406.406h12.188a.406.406 0 00.406-.406V7.906zM13 15a1 1 0 110 2H7a1 1 0 110-2h6zm0-4a1 1 0 110 2H7a1 1 0 110-2h6zm5.5 5.5h1.594a.406.406 0 00.406-.406V3.906a.406.406 0 00-.406-.406H7.906a.406.406 0 00-.406.406V5.5h8.594A2.406 2.406 0 0118.5 7.906V16.5zm4-.406a2.406 2.406 0 01-2.406 2.406H18.5v1.594a2.406 2.406 0 01-2.406 2.406H3.906A2.406 2.406 0 011.5 20.094V7.906A2.406 2.406 0 013.906 5.5H5.5V3.906A2.406 2.406 0 017.906 1.5h12.188A2.406 2.406 0 0122.5 3.906v12.188z"></path>
      </g>
      <defs>
        <clipPath id="clip0_867_90">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Paste.propTypes = {
  color: PropTypes.string
};

export default Paste;
