import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, cancelMission } from '../redux/missions/missions';

const MissionRow = (props) => {
  const {
    name,
    description,
    id,
    reserved,
  } = props;
  const dispatch = useDispatch();

  const handleClickJoin = (e) => {
    dispatch(joinMission(e.target.id));
  };

  const handleClickCancel = (e) => {
    dispatch(cancelMission(e.target.id));
  };

  return (
    <tr>
      <th>{name}</th>
      <th>
        <p>{description}</p>
        <br />
      </th>
      <th className="badge">
        {!reserved && (
          <span>not a member</span>
        )}
        {reserved && (
          <span className="member">active member</span>
        )}
      </th>
      <th className="join">
        {!reserved && (
          <button onClick={handleClickJoin} id={id} type="button">
            Join Mission
          </button>
        )}
        {reserved && (
          <button className="leaving" onClick={handleClickCancel} id={id} type="button">
            Leave Mission
          </button>
        )}
      </th>
    </tr>
  );
};

export default MissionRow;

MissionRow.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
