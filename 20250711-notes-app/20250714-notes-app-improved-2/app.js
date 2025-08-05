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

let notes = [];

/* Core functions */
function openNoteDialog() {
    elements.editor.showModal();
    elements.title.focus();
};

function closeNoteDialog() {
    elements.form.reset();
    elements.editor.close();
};

function setColor(input) {
    const lightness = getLightnessFromHex(input.value);
    document.body.setAttribute('style', 
        `--color-dark: ${input.value}; --text-color: ${lightness > 60 ? 'black' : 'white'};`);
    elements.editor.setAttribute('style', 
        `--color-dark: ${input.value}; --text-color: ${lightness > 60 ? 'black' : 'white'};`);
}

function getLightnessFromHex(hex) {
    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Luminance formula
    const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    return +(brightness * 100).toFixed(2);
}

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
    const titleVal = elements.title.value || `Untitled Note (${state.untitled++})`;
    const contentVal = content.value;
    const date = new Date().toLocaleString();
    const note = document.createElement('div');

    insertContent(note, titleVal, date, contentVal);

    isContainerEmpty();

    closeNoteDialog();

    notes.push({
        id: note.id,
        title: titleVal,
        content: contentVal,
        date: date
    });

    saveNotes();

    renderNotes(noteTitle, date, noteContent);
};

function insertContent(note, titleVal, date, contentVal) {
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

    return { note };
};

function isContainerEmpty() {
    if (elements.container.children.length === 0)
        elements.filler.style.display = 'none';
    else
        elements.filler.style.display = 'flex';
};

function saveNotes() {
    localStorage.setItem('quickNotes', JSON.stringify(notes));
};

function renderNotes() {
    elements.container.innerHTML = '';
    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        insertContent(noteDiv, note.title, note.date, note.content);
    });
};

function loadNotes() {
    const savedNotes = localStorage.getItem('quickNotes');
    return savedNotes ? JSON.parse(savedNotes) : [];
};

/* Event Listeners */
document.addEventListener('DOMContentLoaded', () => {
    notes = loadNotes();
    renderNotes();
});

elements.addNoteBtns.forEach(btn => btn.addEventListener('click', openNoteDialog));
elements.cancel.addEventListener('click', closeNoteDialog);

elements.save.addEventListener('click', e => {
    e.preventDefault();
    createNewNote();
    showSaveToast();
});

elements.editor.addEventListener('keydown', e => {
    switch (e.key) {
        case "Enter":
            e.preventDefault();
            createNewNote();
            showSaveToast();
            break;
        case "Escape":
            e.preventDefault();
            closeNoteDialog();
            break;
    };
});