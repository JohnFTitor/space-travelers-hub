import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const missions = useSelector((state) => state.missions.data);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div>
      <h2> My Missions </h2>
      <ul className="missions-container">
        {joinedMissions.length > 0 ? (
          joinedMissions.map((mission) => (
            <li
              key={mission.id}
              className="mission"
            >
              {mission.name}
            </li>
          ))
        ) : (
          <li className="mission"> You haven&apos;t joined any mission</li>
        )}
      </ul>
    </div>
  );
};

export default JoinedMissions;
