import React from 'react';
import PropTypes from 'prop-types';
import RocketBadge from './RocketBadge';

const RenderRocket = ({
  name, desc, id, img, reserved,
}) => (
  <li className="rocket-li">
    <div className="img-container">
      <img alt={name} src={img} />
    </div>
    <div className="rocket-info">
      <h2>{name}</h2>
      <div className="desc-txt">
        {reserved ? (
          <div className="desc-wraper">
            <p>
              <span className="reserved-txt">reserved</span>
              {desc}
            </p>
          </div>
        ) : (
          <p>{desc}</p>

        )}
      </div>
      <RocketBadge id={id} reserved={reserved} />
    </div>
  </li>
);

RenderRocket.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RenderRocket;
