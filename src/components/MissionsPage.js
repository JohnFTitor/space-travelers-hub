import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const MissionsPage = () => {
  const status = useSelector((state) => state.missions.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(getMissions());
    }
  }, [status, dispatch]);

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th> Mission </th>
            <th> Description </th>
            <th> Status </th>
          </tr>
        </thead>
      </table>
    </section>
  );
};

export default MissionsPage;
