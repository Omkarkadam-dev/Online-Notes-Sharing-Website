const fileDrop = document.getElementById('file-drop');
const fileInput = document.getElementById('file-input');
const filePreview = document.getElementById('file-preview');
const browseBtn = document.getElementById('browse');

// Trigger file input via span click
browseBtn.addEventListener('click', () => fileInput.click());

// Update file preview on change
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  filePreview.textContent = file ? `Selected: ${file.name}` : 'No file selected';
});

// Drag & Drop Handling
fileDrop.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileDrop.style.borderColor = '#4e60ff';
});

fileDrop.addEventListener('dragleave', () => {
  fileDrop.style.borderColor = '#ccc';
});

fileDrop.addEventListener('drop', (e) => {
  e.preventDefault();
  fileDrop.style.borderColor = '#ccc';
  fileInput.files = e.dataTransfer.files;
  filePreview.textContent = `Dropped: ${fileInput.files[0].name}`;
});

// Form submission
document.getElementById('upload-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const subject = document.getElementById('subject').value;
  const desc = document.getElementById('description').value.trim();
  const file = fileInput.files[0];

  if (!title || !subject || !desc || !file) {
    alert("Please fill out all fields and select a file.");
    return;
  }

  alert(`Note "${title}" uploaded successfully!`);
  this.reset();
  filePreview.textContent = 'No file selected';
});
