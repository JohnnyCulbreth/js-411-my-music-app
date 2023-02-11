import React, { useState, useEffect } from 'react';
import SwitchCard from './SwitchCard';
import VolumeCard from './VolumeCard';
import SoundCard from './SoundCard';
import system from './img/system.png';

function Dashboard() {
  const [online, setOnline] = useState(true);
  const [value, setVolume] = useState(20);
  const [quality, setQuality] = useState(2);
  const [notifications, setNotifications] = useState([]);

  let newNotifications = [];

  useEffect(() => {
    if (!online) {
      newNotifications.push(
        "Your application is offline. You won't be able to share or stream music to other devices."
      );
    }

    setNotifications(newNotifications);
  }, [online]);

  useEffect(() => {
    if (value > 80) {
      newNotifications.push(
        'Listening to music at a high volume could cause long-term hearing loss.'
      );
    }

    setNotifications(newNotifications);
  }, [value]);

  useEffect(() => {
    if (quality === 1) {
      newNotifications.push(
        'Music quality is degraded. Increase quality if your connection allows it.'
      );
    }

    setNotifications(newNotifications);
  }, [quality]);

  return (
    <div className='dashwrapper'>
      <div className='cards'>
        <div className='displaycard'>
          <SwitchCard online={online} setOnline={setOnline} />
        </div>
        <div className='displaycard'>
          <VolumeCard value={value} setVolume={setVolume} />
        </div>
        <div className='displaycard'>
          <SoundCard quality={quality} setQuality={setQuality} />
        </div>
      </div>
      <div>
        <img src={system} style={{ width: 500, height: 62, margin: 5 }} />
        {notifications.map((notification, index) => (
          <p key={index}>{notification}</p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
