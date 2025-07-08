import React from 'react';
import PropTypes from 'prop-types';

const Clapperboard = props => {
  const { color = 'currentColor', ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <g clipPath="url(#clip0_18_15114)">
        <path d="M20 12H4v7a1 1 0 001 1h14a1 1 0 001-1v-7zM3.688 7.057h.001c-.436.132-.778.647-.63 1.249l.553 1.474L7.57 8.63 5.818 6.426l-2.13.63zm4.198-1.243l1.76 2.213 4.143-1.205-1.739-2.243-4.164 1.235zm10.558-2.126c-.133-.443-.663-.79-1.276-.624l-3.06.906 1.746 2.253 3.093-.9-.501-1.629-.002-.006zM22.001 19a3 3 0 01-3 3H5a3 3 0 01-3-3v-7.818l-.836-2.23a1.005 1.005 0 01-.03-.089c-.432-1.585.422-3.253 1.978-3.72l.004-.001 8.766-2.599a.994.994 0 01.48-.141l4.254-1.26.02-.007c1.583-.432 3.25.419 3.72 1.97l.799 2.601.025.097a1 1 0 01-.7 1.157L16.01 8.26a.991.991 0 01-.48.139L10.023 10h10.979a1 1 0 011 1v8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15114">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Clapperboard.propTypes = {
  color: PropTypes.string
};

export default Clapperboard;
