import React from 'react';
import { useSelector } from 'react-redux';
import RenderRocket from './RenderRocket';
import '../styles/RenderRocket.scss';

function RocketsPage() {
  const rocketsColl = useSelector((state) => state.rocketsReducer);
  return (
    <section>
      <ul>
        {rocketsColl.map((rocket) => (
          <RenderRocket
            key={rocket.id}
            name={rocket.rocket_name}
            desc={rocket.description}
            img={rocket.flickr_images}
          />
        ))}
      </ul>
    </section>
  );
}

export default RocketsPage;
