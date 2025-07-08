import React from 'react';
import PropTypes from 'prop-types';

const Landscape = props => {
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
      <g clipPath="url(#clip0_18_15815)">
        <path d="M7.928 2.003a1 1 0 01.966.55l3.38 6.759 4.019-4.019.096-.085a1 1 0 011.559.476l5 15A1 1 0 0122 22H2a1 1 0 01-.948-1.316l6-18 .057-.138a1 1 0 01.82-.543zm.088 13.003c-1.046-.056-2.126.215-3.255.87L3.386 20h17.227l-.945-2.835c-1.162.573-2.356.864-3.576.836-1.612-.037-3.173-.625-4.67-1.684l-.222-.153c-1.11-.738-2.168-1.104-3.184-1.158zm-2.405-1.68a7.21 7.21 0 012.512-.317c1.536.082 3.024.665 4.454 1.675l.233.16c1.159.77 2.265 1.134 3.327 1.158.931.021 1.892-.218 2.89-.757l-2.465-7.394-3.855 3.856a1 1 0 01-1.602-.26l-2.92-5.841-2.574 7.72z"></path>
      </g>
      <defs>
        <clipPath id="clip0_18_15815">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Landscape.propTypes = {
  color: PropTypes.string
};

export default Landscape;
