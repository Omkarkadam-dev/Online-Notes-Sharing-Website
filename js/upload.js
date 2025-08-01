// Show selected file name
document.getElementById("note-file").addEventListener("change", function () {
  const fileName = this.files[0] ? this.files[0].name : "No file selected";
  document.getElementById("file-name").textContent = fileName;
});

// Simulated upload
document.getElementById("upload-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const subject = document.getElementById("subject").value;
  const file = document.getElementById("note-file").files[0];
  const description = document.getElementById("description").value;

  if (!title || !subject || !file || !description) {
    alert("Please fill in all fields and select a file.");
    return;
  }

  alert(`✅ Note "${title}" uploaded successfully!`);
  this.reset();
  document.getElementById("file-name").textContent = "No file selected";
});
