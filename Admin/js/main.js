const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('admin-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// Optional: Add animations or fetch data later
document.addEventListener("DOMContentLoaded", () => {
  console.log("Admin dashboard loaded.");
});


const activities = [
  {
    icon: "📤",
    user: "Chirag Bodke",
    action: "uploaded",
    target: "OOP Notes.pdf",
    time: "5 mins ago"
  },
  {
    icon: "👤",
    user: "Kiran Desai",
    action: "created an account",
    target: "",
    time: "12 mins ago"
  },
  {
    icon: "📥",
    user: "Riya Sharma",
    action: "downloaded",
    target: "DBMS.pdf",
    time: "1 hour ago"
  },
  {
    icon: "🚩",
    user: "Admin",
    action: "flagged",
    target: "Spam Note.docx",
    time: "3 hours ago"
  },
];

const container = document.getElementById('activity-feed');

activities.forEach(act => {
  const item = document.createElement('div');
  item.className = "activity-item";
  item.innerHTML = `
    <div class="activity-icon">${act.icon}</div>
    <div class="activity-details">
      <h4><strong>${act.user}</strong> ${act.action} <span style="color:#4e60ff">${act.target}</span></h4>
      <p class="activity-time">${act.time}</p>
    </div>
  `;
  container.appendChild(item);
});


// You could add scroll-to-top, footer interactions, or theme toggles here.
console.log("Admin footer loaded.");
