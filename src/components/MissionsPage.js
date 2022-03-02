import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import '../styles/missionsPage.scss';
import MissionRow from './MissionRow';

const MissionsPage = () => {
  const status = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(getMissions());
    }
  }, [status, dispatch]);

  return (
    <section className="missions">
      <table>
        <thead>
          <tr>
            <th> Mission </th>
            <th> Description </th>
            <th> Status </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionRow
              key={mission.id}
              name={mission.name}
              description={mission.description}
              id={mission.id}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MissionsPage;
