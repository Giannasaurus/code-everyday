Array.prototype.scream = function () {
    console.log("🔥🔥 AAAHHHH!!! I'm an array!!! 🔥🔥");
}
const weAreArray = [1, 2, 3];
weAreArray.scream(); // 🔥🔥 AAAHHHH!!! I'm an array!!! 🔥🔥

//----------------------------------------------------------

const state = {
    untitled: 0
};

const elements = {
    addNoteBtns: Array.from(document.getElementsByClassName('add-note')),
    themeSwitch: document.getElementById('themeSwitch'),
    container: document.getElementById('notesContainer'),
    form: document.getElementById('noteForm'),
    cancel: document.getElementById('cancelNote'),
    save: document.getElementById('saveNote'),
    content: document.getElementById('content'),
    editor: document.getElementById('noteEditor')
};

let notes = [];

/* Core functions */
function openNoteDialog() {
    const titleInput = document.getElementById('title');

    elements.editor.showModal();
    titleInput.focus();
};

function closeNoteDialog() {
    elements.form.reset();
    elements.editor.close();
};

function toggleTheme() {
    const isDark = elements.themeSwitch.textContent === '🌙';
    elements.themeSwitch.textContent = isDark ? '☀️' : '🌙';
    // TODO: implement real theme toggle
};

function showSaveToast() {
    const noteSaved = document.getElementById('noteSaved');
    noteSaved.style.display = 'inline-block';
    noteSaved.style.opacity = '1';

    setTimeout(() => {
        noteSaved.style.opacity = '0';
        setTimeout(() => {
            noteSaved.style.display = 'none';
        }, 500);
    }, 2500);
};

function createNewNote() {
    const filler = document.getElementById('filler');

    const titleVal = title.value || `Untitled Note (${state.untitled++})`;
    const contentVal = content.value;
    const date = new Date().toLocaleString();
    const note = document.createElement('div');

    note.id = titleVal.replace(/\s/g, '-').toLowerCase();
    note.className = 'note';

    const noteTitle = document.createElement('h2');
    noteTitle.textContent = titleVal;

    const noteDate = document.createElement('p');
    noteDate.textContent = date;
    noteDate.className = 'noteDate';

    const noteContent = document.createElement('p');
    noteContent.textContent = contentVal;
    noteContent.className = 'noteContent';

    note.append(noteTitle, noteDate, noteContent);
    elements.container.appendChild(note);

    if (elements.container.children.length > 0) filler.style.display = 'none';

    closeNoteDialog();

    notes.unshift({
        id: note.id,
        title: noteTitle.textContent,
        content: noteContent.textContent
    });

    saveNotes();
};

function saveNotes() {
    localStorage.setItem('quickNotes', JSON.stringify(notes));
};

function renderNotes() {
    if (notes.length === 0 || elements.container.children.length > 0) filler.style.display = 'block';

    elements.container.innerHTML = notes.map(note => {
    });
};

/* Event Listeners */
elements.addNoteBtns.forEach(btn => btn.addEventListener('click', openNoteDialog));
elements.cancel.addEventListener('click', closeNoteDialog);
elements.themeSwitch.addEventListener('click', toggleTheme);

elements.save.addEventListener('click', e => {
    e.preventDefault();
    createNewNote();
    showSaveToast();
});

elements.editor.addEventListener('keydown', e => {
    switch (e.key) {
        case "Enter": //save
            e.preventDefault();
            createNewNote();
            showSaveToast();
            break;
        case "Escape": //cancel
            e.preventDefault();
            closeNoteDialog();
            break;
    };
});
