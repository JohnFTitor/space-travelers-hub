import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const MissionRow = (props) => {
  const { name, description, id } = props;
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(joinMission(e.target.id));
  };

  return (
    <tr>
      <th>{name}</th>
      <th>
        <p>{description}</p>
        <br />
      </th>
      <th className="badge">
        <span>not a member</span>
      </th>
      <th className="join">
        <button onClick={(e) => handleClick(e)} id={id} type="button">
          Join Mission
        </button>
      </th>
    </tr>
  );
};

export default MissionRow;

MissionRow.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
