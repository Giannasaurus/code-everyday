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
    filler: document.getElementById('filler'),
    form: document.getElementById('noteForm'),
    cancel: document.getElementById('cancelNote'),
    save: document.getElementById('saveNote'),
    title: document.getElementById('title'),
    content: document.getElementById('content'),
    editor: document.getElementById('noteEditor')
};
console.log('variables assigned')

let notes = [];

/* Core functions */
function openNoteDialog() {
    console.log('triggered opened note dialog')
    elements.editor.showModal();
    elements.title.focus();
    console.log('successfully ran')
};

function closeNoteDialog() {
    console.log('triggered close note dialog')
    elements.form.reset();
    elements.editor.close();
    console.log('successfully ran')
};

function toggleTheme() {
    console.log('triggered theme toggle')
    const isDark = elements.themeSwitch.textContent === '🌙';
    elements.themeSwitch.textContent = isDark ? '☀️' : '🌙';
    // TODO: implement real theme toggle
    console.log('successfully ran')
};

function showSaveToast() {
    console.log('triggered showsavetoast')
    const noteSaved = document.getElementById('noteSaved');
    noteSaved.style.display = 'inline-block';
    noteSaved.style.opacity = '1';

    setTimeout(() => {
        noteSaved.style.opacity = '0';
        setTimeout(() => {
            noteSaved.style.display = 'none';
        }, 500);
    }, 2500);
    console.log('successfully ran')
};

function createNewNote() {
    console.log('triggered createnewnote')
    const titleVal = elements.title.value || `Untitled Note (${state.untitled++})`;
    const contentVal = content.value;
    const date = new Date().toLocaleString();
    const note = document.createElement('div');

    insertContent(note, titleVal, date, contentVal);
    console.log('triggered insertcontent, new note created')

    isContainerEmpty();
    console.log('triggered iscontainerempty')

    closeNoteDialog();
    console.log('triggered closenotedialog')

    console.log('triggered unshift')
    notes.unshift({
        id: note.id,
        title: titleVal,
        content: contentVal,
        date: date
    });
    console.log('successfully ran')

    console.log('triggered savenotes')
    saveNotes();
    console.log('successfully ran')

    console.log('triggered rendernotes')
    renderNotes(noteTitle, date, noteContent);
    console.log('successfully ran')
    
    console.log('successfully ran')
};

function insertContent(note, titleVal, date, contentVal) {
    console.log('triggered insertcontent')
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

    console.log('successfully ran')
    return { note };
};

function isContainerEmpty() {
    console.log('triggered iscontainerempty')
    if (elements.container.children.length === 0)
        elements.filler.style.display = 'flex'; // show "no notes yet"
    else
        elements.filler.style.display = 'none'; // hide it
    console.log('successfully ran')
};

function saveNotes() {
    console.log('triggered savenotes')
    localStorage.setItem('quickNotes', JSON.stringify(notes));
    console.log('successfully ran')
};

function renderNotes() {
    console.log('triggered rendernotes')
    elements.container.innerHTML = '';
    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        insertContent(noteDiv, note.title, note.date, note.content);
    });
    console.log('successfully ran')
};

function loadNotes() {
    console.log('triggered loadnotes')
    const savedNotes = localStorage.getItem('quickNotes');
    console.log('successfully ran')
    return savedNotes ? JSON.parse(savedNotes) : [];
};

/* Event Listeners */
document.addEventListener('DOMContentLoaded', () => {
    console.log('triggered dcl, loadnotes, rendernotes')
    notes = loadNotes();
    renderNotes();
    console.log('successfully ran')
});

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