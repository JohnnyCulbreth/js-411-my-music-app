// import { DashboardOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import SwitchCard from './SwitchCard';
import VolumeCard from './VolumeCard';
import SoundCard from './SoundCard';

function Dashboard() {
  return (
    <div className='cards'>
      <div class='displaycard'>
        {' '}
        <SwitchCard />{' '}
      </div>
      <div class='displaycard'>
        {' '}
        <VolumeCard />{' '}
      </div>
      <div class='displaycard'>
        {' '}
        <SoundCard />{' '}
      </div>
    </div>
  );
}

export default Dashboard;
