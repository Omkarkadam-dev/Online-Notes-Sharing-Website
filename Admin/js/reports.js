const reports = [
  {
    note: "Advanced Python.pdf",
    reportedBy: "Riya Sharma",
    reason: "Contains spam links",
    status: "pending",
    time: "10 mins ago"
  },
  {
    note: "DBMS Short Notes.docx",
    reportedBy: "Karan Mehta",
    reason: "Inaccurate content",
    status: "resolved",
    time: "2 hours ago"
  },
  {
    note: "Java OOP Cheatsheet.pdf",
    reportedBy: "Chirag Bodke",
    reason: "Plagiarized material",
    status: "pending",
    time: "Yesterday"
  }
];

const tbody = document.getElementById("reportTableBody");

reports.forEach(report => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${report.note}</td>
    <td>${report.reportedBy}</td>
    <td>${report.reason}</td>
    <td><span class="${report.status === 'pending' ? 'status-pending' : 'status-resolved'}">${report.status}</span></td>
    <td>${report.time}</td>
    <td>
      <button class="action-btn">View</button>
      <button class="action-btn delete-btn">Delete</button>
    </td>
  `;
  tbody.appendChild(row);
});

// Search filter
document.getElementById("reportSearch").addEventListener("input", function () {
  const val = this.value.toLowerCase();
  const rows = tbody.querySelectorAll("tr");
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(val) ? "" : "none";
  });
});
