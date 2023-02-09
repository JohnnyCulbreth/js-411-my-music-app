import React from 'react';
import SwitchCard from './SwitchCard';
import VolumeCard from './VolumeCard';
import SoundCard from './SoundCard';

function Dashboard() {
  return (
    <div className='cards'>
      <div className='displaycard'>
        <SwitchCard />
      </div>
      <div className='displaycard'>
        <VolumeCard />
      </div>
      <div className='displaycard'>
        <SoundCard />
      </div>
    </div>
  );
}

export default Dashboard;
