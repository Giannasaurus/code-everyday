const addNoteBtns = Array.from(document.getElementsByClassName('add-note'));
const themeSwitch = document.getElementById('themeSwitch');
const container = document.getElementById('notesContainer');
const filler = document.getElementById('filler');
const editor = document.getElementById('noteEditor');
const form = document.getElementById('form');
const cancel = document.getElementById('cancelNote');
const save = document.getElementById('saveNote');
const title = document.getElementById('title');
const content = document.getElementById('content');
const noteSaved = document.getElementById('noteSaved');
const note = Array.from(document.getElementsByClassName('note'));

// enable dialog pop-up to the two add note btns
addNoteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        editor.showModal();
    });
});

// switches theme of the page
themeSwitch.addEventListener('click', function () {
    if (this.textContent === '🌙') {
        this.textContent = '☀️';
        // theme switch
    }
    else {
        this.textContent = '🌙';
        // theme switch
    }
});

// close editor on cancel
cancel.addEventListener('click', () => {
    form.reset();
    editor.close();
});

// save note on submit
save.addEventListener('click', e => {
    e.preventDefault();
    newNote();
    form.reset();
    editor.close();
    savingNote();
});

// saves note
editor.addEventListener('keydown', e => {
    switch (e.key) {
        case "Enter": //save
            e.preventDefault();
            newNote();
            form.reset();
            editor.close();
            savingNote();
            break;
        case "Escape": //cancel
            e.preventDefault();
            form.reset();
            editor.close();
            break;
    };
});

const savingNote = () => {
    noteSaved.style.display = 'inline-block';
    noteSaved.style.opacity = '1';
    setTimeout(() => {
        noteSaved.style.opacity = '0';
        setTimeout(() => {
            noteSaved.style.display = 'none';
        }, 500);
    }, 2500);
}

let untitled = 0;
const newNote = () => {
    const noteTitle = title.value || `Untitled Note (${untitled++})`;
    const noteContent = content.value;

    const note = document.createElement('div');
    note.id = noteTitle.replace(/\s/g, '-').toLowerCase();
    note.className = 'note';
    console.log(`"${noteTitle}" id: ${note.id}`);

    note.innerHTML = `
        <h2>${noteTitle}</h2>
        <p>${noteContent}</p>
    `;

    container.appendChild(note);
    localStorage.setItem('note', note);
    if (container.children.length > 0) filler.style.display = 'none';
};
