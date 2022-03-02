import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profileRockets.scss';

const ProfileRockets = () => {
  const rocketStore = useSelector((state) => state.rocketsReducer.filter((item) => item.reserved));

  return (
    <div className="rockets_container">
      <h2>My rockets</h2>
      <ul>
        {rocketStore.map((rocket) => (
          <li className="Rocket-li-profile" key={rocket.id}>{rocket.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileRockets;
