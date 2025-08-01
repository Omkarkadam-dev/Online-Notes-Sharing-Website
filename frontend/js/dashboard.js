// Simulate dynamic notes (for demo purpose)
const notes = [
  {
    title: "DBMS Normalization",
    subject: "BCA",
    desc: "Explanation of 1NF to BCNF with examples.",
    date: "30 July 2025",
    link: "#"
  },
  {
    title: "OOP in Java",
    subject: "Engineering",
    desc: "Concepts like inheritance, polymorphism, encapsulation, abstraction.",
    date: "28 July 2025",
    link: "#"
  },
  {
    title: "Tally Basics",
    subject: "Commerce",
    desc: "Journal entries, ledgers, balance sheets using Tally.",
    date: "29 July 2025",
    link: "#"
  }
];

// Render notes
const container = document.getElementById('notes-container');

notes.forEach(note => {
  const card = document.createElement('div');
  card.className = 'note-card';
  card.innerHTML = `
    <h3>${note.title}</h3>
    <p class="subject-tag">${note.subject}</p>
    <p class="desc">${note.desc}</p>
    <div class="note-footer">
      <span class="date">Uploaded: ${note.date}</span>
      <div class="actions">
        <a href="${note.link}" class="view-btn">📄 View</a>
        <button class="delete-btn">🗑 Delete</button>
      </div>
    </div>
  `;
  container.appendChild(card);
});
