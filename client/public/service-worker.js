self.addEventListener('push', function(event) {
  const data = event.data.json();
  const options = {
    body: data.notification.body,
  };
  event.waitUntil(
    self.registration.showNotification(data.notification.title, options)
  );
});
