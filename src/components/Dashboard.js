import React, { useState, useEffect } from 'react';
import SwitchCard from './SwitchCard';
import VolumeCard from './VolumeCard';
import SoundCard from './SoundCard';

function Dashboard() {
  const [online, setOnline] = useState(false);
  const [volume, setVolume] = useState(20);
  const [quality, setQuality] = useState('high');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    let newNotifications = [];

    if (!online) {
      newNotifications.push(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
    }
    if (volume > 80) {
      newNotifications.push(
        'Listening to music at a high volume could cause long-term hearing loss.'
      );
    }
    if (quality === 'low') {
      newNotifications.push(
        'Music quality is degraded. Increase quality if your connection allows it.'
      );
    }

    setNotifications(newNotifications);
  }, [online, volume, quality]);

  return (
    <div className='dashwrapper'>
      <div className='cards'>
        <div className='displaycard'>
          <SwitchCard online={online} setOnline={setOnline} />
        </div>
        <div className='displaycard'>
          <VolumeCard volume={volume} setVolume={setVolume} />
        </div>
        <div className='displaycard'>
          <SoundCard quality={quality} setQuality={setQuality} />
        </div>
      </div>
      <div>
        <h2>System Notifications:</h2>
        {notifications.map((notification, index) => (
          <p key={index}>{notification}</p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
