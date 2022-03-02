import React from 'react';
import ProfileRockets from './ProfileRockets';
import JoinedMissions from './JoinedMissions';
import '../styles/myProfilePage.scss';

const MyProfile = () => (
   <section className="main-container">
     <JoinedMissions />
     <ProfileRockets />
   </section>
);

export default MyProfile;
