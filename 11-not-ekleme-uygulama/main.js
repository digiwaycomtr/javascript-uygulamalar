const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderNotes() {
  notesList.innerHTML = "";
  if (notes.length == 0) {
    notesList.innerHTML = "<p class='empty' >Not Listeniz Boş</p>";
  }
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
      <p>${note}</p>
      <button id="delete-note-btn" onclick="deleteNote(${index})">Sil</button>
    `;
    notesList.appendChild(noteDiv);
  });
}

function addNote() {
  const noteText = noteInput.value.trim();
  if (noteText === "") return;

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
}

renderNotes();

addNoteBtn.addEventListener("click", addNote);
