const users = [
  {
    name: "Chirag Bodke",
    email: "chirag@notenest.com",
    role: "Admin",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Riya Sharma",
    email: "riya@notenest.com",
    role: "Student",
    status: "active",
    avatar: "https://i.pravatar.cc/150?img=10"
  },
  {
    name: "Karan Mehta",
    email: "karan@notenest.com",
    role: "Student",
    status: "blocked",
    avatar: "https://i.pravatar.cc/150?img=15"
  }
];

const tbody = document.getElementById("userTableBody");

users.forEach(user => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <div class="user-avatar">
        <img src="${user.avatar}" alt="${user.name}" />
        <span>${user.name}</span>
      </div>
    </td>
    <td>${user.email}</td>
    <td>${user.role}</td>
    <td><span class="${user.status === 'active' ? 'status-active' : 'status-blocked'}">${user.status}</span></td>
    <td>
      <button class="action-btn">View</button>
      <button class="action-btn delete-btn">Delete</button>
    </td>
  `;
  tbody.appendChild(row);
});

// Optional search filter
document.getElementById("userSearch").addEventListener("input", function () {
  const val = this.value.toLowerCase();
  const rows = tbody.querySelectorAll("tr");
  rows.forEach(row => {
    const name = row.innerText.toLowerCase();
    row.style.display = name.includes(val) ? "" : "none";
  });
});
