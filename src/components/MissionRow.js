import React from 'react';
import PropTypes from 'prop-types';

const MissionRow = (props) => {
  const { name, description } = props;

  return (
    <tr>
      <th>{name}</th>
      <th>{description}</th>
      <th>
        <span>not a member</span>
      </th>
      <th>
        <button type="button">
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
};
