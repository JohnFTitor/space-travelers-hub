import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { reserveRocket } from '../redux/rockets/rockets';

function RocketBadge({ reserved, id }) {
  const dispatch = useDispatch();

  const clickHandler = (event) => {
    const { id } = event.target;
    dispatch(reserveRocket(id));
  };

  return reserved ? (
    <button className="cancelBtn" type="button" onClick={clickHandler} id={id}>
      cancel reservation
    </button>
  ) : (
    <button className="reserveBtn" type="button" onClick={clickHandler} id={id}>
      reserve rocket
    </button>
  );
}

RocketBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketBadge;
