class NotesApp {
    constructor() {
        this.notes = [];
        this.state = { untitled: 0 };
        this.elements = this.initializeElements();
        this.init();
    }

    initializeElements() {
        return {
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
    }

    init() {
        this.loadNotes();
        this.renderNotes();
        this.bindEvents();
    }

    // Note Management
    loadNotes() {
        try {
            const savedNotes = localStorage.getItem('quickNotes');
            this.notes = savedNotes ? JSON.parse(savedNotes) : [];
        } catch (error) {
            console.error('Failed to load notes:', error);
            this.notes = [];
        }
    }

    saveNotes() {
        try {
            localStorage.setItem('quickNotes', JSON.stringify(this.notes));
        } catch (error) {
            console.error('Failed to save notes:', error);
            this.showErrorToast('Failed to save note');
        }
    }

    createNote() {
        const titleVal = this.elements.title.value.trim() || `Untitled Note (${this.state.untitled++})`;
        const contentVal = this.elements.content.value.trim();
        
        if (!contentVal) {
            this.elements.content.focus();
            return;
        }

        const note = {
            id: this.generateNoteId(titleVal),
            title: titleVal,
            content: contentVal,
            date: new Date().toLocaleString()
        };

        this.notes.unshift(note);
        this.saveNotes();
        this.renderNotes();
        this.closeNoteDialog();
        this.showSaveToast();
    }

    generateNoteId(title) {
        const baseId = title.replace(/\s/g, '-').toLowerCase();
        let id = baseId;
        let counter = 1;
        
        while (this.notes.some(note => note.id === id)) {
            id = `${baseId}-${counter}`;
            counter++;
        }
        
        return id;
    }

    deleteNote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
        this.saveNotes();
        this.renderNotes();
    }

    // UI Rendering
    renderNotes() {
        this.elements.container.innerHTML = '';
        
        this.notes.forEach(note => {
            const noteElement = this.createNoteElement(note);
            this.elements.container.appendChild(noteElement);
        });
        
        this.updateEmptyState();
    }

    createNoteElement(note) {
        const noteDiv = document.createElement('div');
        noteDiv.id = note.id;
        noteDiv.className = 'note';

        const noteTitle = document.createElement('h2');
        noteTitle.textContent = note.title;

        const noteDate = document.createElement('p');
        noteDate.textContent = note.date;
        noteDate.className = 'noteDate';

        const noteContent = document.createElement('p');
        noteContent.textContent = note.content;
        noteContent.className = 'noteContent';

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete-btn';
        deleteBtn.setAttribute('aria-label', 'Delete note');
        deleteBtn.addEventListener('click', () => this.deleteNote(note.id));

        noteDiv.append(noteTitle, noteDate, noteContent, deleteBtn);
        return noteDiv;
    }

    updateEmptyState() {
        if (this.notes.length === 0) {
            this.elements.filler.style.display = 'flex';
        } else {
            this.elements.filler.style.display = 'none';
        }
    }

    // Dialog Management
    openNoteDialog() {
        this.elements.editor.showModal();
        this.elements.title.focus();
    }

    closeNoteDialog() {
        this.elements.form.reset();
        this.elements.editor.close();
    }

    // Theme Management
    toggleTheme() {
        const isDark = this.elements.themeSwitch.textContent === '🌙';
        this.elements.themeSwitch.textContent = isDark ? '☀️' : '🌙';
        
        // Apply theme to body
        document.body.classList.toggle('dark-theme', isDark);
        
        // Save theme preference
        try {
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch (error) {
            console.error('Failed to save theme preference:', error);
        }
    }

    loadTheme() {
        try {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                this.elements.themeSwitch.textContent = '☀️';
            }
        } catch (error) {
            console.error('Failed to load theme:', error);
        }
    }

    // Toast Notifications
    showSaveToast() {
        this.showToast('Note saved!', 'success');
    }

    showErrorToast(message) {
        this.showToast(message, 'error');
    }

    showToast(message, type = 'info') {
        let toast = document.getElementById('toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.style.display = 'block';
        toast.style.opacity = '1';

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.style.display = 'none';
            }, 300);
        }, 2500);
    }

    // Event Binding
    bindEvents() {
        // Add note buttons
        this.elements.addNoteBtns.forEach(btn => 
            btn.addEventListener('click', () => this.openNoteDialog())
        );

        // Dialog controls
        this.elements.cancel.addEventListener('click', () => this.closeNoteDialog());
        this.elements.save.addEventListener('click', (e) => {
            e.preventDefault();
            this.createNote();
        });

        // Theme toggle
        this.elements.themeSwitch.addEventListener('click', () => this.toggleTheme());

        // Keyboard shortcuts
        this.elements.editor.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'Enter':
                        e.preventDefault();
                        this.createNote();
                        break;
                    case 'Escape':
                        e.preventDefault();
                        this.closeNoteDialog();
                        break;
                }
            } else if (e.key === 'Escape') {
                e.preventDefault();
                this.closeNoteDialog();
            }
        });

        // Form submission
        this.elements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.createNote();
        });
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NotesApp();
});

// Alternative: If you prefer a more functional approach
const createNotesApp = () => {
    let notes = [];
    let state = { untitled: 0 };
    
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

    const api = {
        getNotes: () => [...notes],
        addNote: (note) => notes.unshift(note),
        removeNote: (id) => notes = notes.filter(note => note.id !== id),
        clearNotes: () => notes = []
    };

    // Implementation would follow similar patterns but with closures
    // instead of class methods
    
    return api;
};
