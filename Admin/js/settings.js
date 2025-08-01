document.querySelector('.settings-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('adminName').value;
  const email = document.getElementById('adminEmail').value;
  const notif = document.getElementById('notifToggle').checked;

  alert(`✅ Settings Saved!\nName: ${name}\nEmail: ${email}\nNotifications: ${notif ? 'On' : 'Off'}`);
});
