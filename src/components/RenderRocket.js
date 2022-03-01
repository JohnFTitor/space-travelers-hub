import React from 'react';
import PropTypes from 'prop-types';

const RenderRocket = (
  {
    name, desc, id, img,
  },
) => (
  <li className="rocket-li">
    <div className="img-container">
      <img alt={name} src={img} />
    </div>
    <div className="rocket-info">
      <h2>{name}</h2>
      <p>{desc}</p>
      <button type="button" id={id}>
        Reserve rocket
      </button>
    </div>
  </li>
);

RenderRocket.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RenderRocket;