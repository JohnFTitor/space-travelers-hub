import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { reserveRocket, cancelRocket } from '../redux/rockets/rockets';

function RocketBadge({ reserved, id }) {
  const dispatch = useDispatch();

  const clickHandlerReserve = (event) => {
    const { id } = event.target;
    dispatch(reserveRocket(id));
  };

  const clickHandlerCancel = (event) => {
    const { id } = event.target;
    dispatch(cancelRocket(id));
  };

  return reserved ? (
    <button className="cancelBtn" type="button" onClick={clickHandlerCancel} id={id}>
      cancel reservation
    </button>
  ) : (
    <button className="reserveBtn" type="button" onClick={clickHandlerReserve} id={id}>
      reserve rocket
    </button>
  );
}

RocketBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketBadge;
