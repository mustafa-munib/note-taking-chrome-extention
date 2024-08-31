const noteInput = document.getElementById('note-input');
const saveNoteButton = document.getElementById('save-note');
const clearNotesButton = document.getElementById('clear-notes');
const notesList = document.getElementById('notes-list');

// Load saved notes when the popup opens
document.addEventListener('DOMContentLoaded', () => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notesList.innerHTML = notes.map(note => `<div class="note">${note}</div>`).join('');
});

// Save a new note
saveNoteButton.addEventListener('click', () => {
  const note = noteInput.value.trim();
  if (note) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    notesList.innerHTML = notes.map(note => `<div class="note">${note}</div>`).join('');
    noteInput.value = '';
  }
});

// Clear all notes
clearNotesButton.addEventListener('click', () => {
  localStorage.removeItem('notes');
  notesList.innerHTML = '';
});
