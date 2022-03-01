import React from 'react';
import { useSelector } from 'react-redux';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer[0]);
  console.log(missions);

  return (
    <section>
      <h2>Missions</h2>
    </section>
  );
};

export default Missions;
