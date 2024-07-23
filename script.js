const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');

let notes = [];

function renderNotes(){
    notesContainer.innerHTML = '';


for (let i = 0 ; i < notes.length ; i++){
const noteDiv = document.createElement('div');
noteDiv.className = 'note';
noteDiv.textContent = notes[i];

notesContainer.appendChild(noteDiv);


}
}

addNoteBtn.addEventListener('click', function(){
    const noteText = noteInput.value;

    notes.push(noteText);

    noteInput.value = '';  

    renderNotes();

});


const deleteBtn = document.createElement('button');
deleteBtn.className = 'delete';
deleteBtn.textContent = 'Supprimer';

noteDiv.appendChild(deleteBtn);
notesContainer.appendChild(noteDiv);

deleteBtn.addEventListener('click',function(){
  
  notes.splice(i, 1);

    renderNotes();
});







