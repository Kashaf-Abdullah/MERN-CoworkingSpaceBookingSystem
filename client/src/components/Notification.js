import React, { useEffect, useState } from 'react';


const publicVapidKey = 'BK2XVyWPbsV-FdGF8-CuoUSHYRu9L_rRUs5gb8Qf5bMsj09nS3AbKd9Ldm9TrXZjtoS3v0PjkZgtk32GetA56xg';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);

        return registration.pushManager.getSubscription().then(subscription => {
          if (subscription === null) {
            return registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
            });
          } else {
            return subscription;
          }
        });
      }).then(subscription => {
        fetch(`${process.env.REACT_APP_HOST_URL}/subscribe`, {
          method: 'POST',
          body: JSON.stringify(subscription),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }).catch(error => {
        console.error('Service Worker registration or subscription failed:', error);
      });
    }
  }, []);

  return (
    <div>
    {/* <h1>Push Notifications in MERN</h1> */}
    <div>
      {notifications.map((notification, index) => (
        <div key={index}>
          <h2>{notification.title} hyiu</h2>
          <p>{notification.body} oo</p>
        </div>
      ))}
    </div>
  </div>
  );
};

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

export default Notifications;
