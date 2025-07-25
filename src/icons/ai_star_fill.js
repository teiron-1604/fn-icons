import React from 'react';
import PropTypes from 'prop-types';

const AiStarFill = props => {
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
      <path d="M12.121 1.005c.243.02.478.1.684.23l.1.07.095.078a1.5 1.5 0 01.405.596l.038.117.006.02L15.03 8.25a.999.999 0 00.718.718l6.135 1.58.016.006a1.5 1.5 0 01.716.442l.08.095.07.1a1.5 1.5 0 01-.748 2.217l-.118.037-.016.004-6.135 1.581a1 1 0 00-.719.718l.001.001-1.582 6.135-.006.02a1.5 1.5 0 01-2.851.116l-.037-.117c-.002-.006-.005-.013-.006-.02L8.967 15.75a1 1 0 00-.592-.677l-.126-.042-6.135-1.582-.023-.006a1.501 1.501 0 01-1.086-1.32L1 12l.005-.122c.023-.283.127-.555.299-.782l.077-.094a1.5 1.5 0 01.71-.444l.022-.007L8.25 8.968l.126-.042a1 1 0 00.592-.675l1.582-6.136.006-.02a1.5 1.5 0 01.538-.79l.1-.07A1.5 1.5 0 0111.998 1l.122.005zM3 19a1 1 0 110-2 1 1 0 011.994-.102L5 17l.102.006A1 1 0 014.999 19a1 1 0 01-2 0zm16-12V6h-1a1 1 0 110-2h1V3a1 1 0 012 0v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0z"></path>
    </svg>
  );
};

AiStarFill.propTypes = {
  color: PropTypes.string
};

export default AiStarFill;
