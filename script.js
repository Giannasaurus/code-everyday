// Router class handles navigation and content loading
class Router {
    constructor() {
        this.routes = {
            '': 'index.html',
            '#achievements': 'achievements.html'
        };

        // Attach event listener to all nav links
        document.querySelectorAll('a[href]').forEach(navLink => {
            navLink.addEventListener('click', e => {
                e.preventDefault();
                location.hash = navLink.getAttribute('href');
                this.handleRoute();
            });
        });

        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    }

    async handleRoute() {
        const locationHash = window.location.hash;
        const route = this.routes[locationHash];
        const content = document.getElementById('content');
        if (!route) {
            content.innerHTML = '<p>404 not found</p>';
            return;
        }
        const txt = await fetch(route).then(data => data.text());
        const doc = new DOMParser().parseFromString(txt, 'text/html');
        content.innerHTML = doc.getElementById('content').innerHTML;
    }
}

// EventManager class handles keyboard events and achievements
class EventManager {
    constructor() {
        document.addEventListener('keydown', e => {
            e.preventDefault();
            console.log('keydown press')
            this.handleKey(e.key);
        });
    }

    handleKey(key) {
        console.log('handling key')
        // List of keys to show and unlock achievements for
        const keys = [
            // Modifier keys
            'Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock',
            // Whitespace keys
            'Enter', 'Tab', ' ',
            // Navigation keys
            'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'End', 'Home', 'PageDown', 'PageUp',
            // Editing keys
            'Backspace', 'Clear', 'Copy', 'CrSel', 'Cut', 'Delete', 'EraseEof', 'ExSel', 'Insert', 'Paste', 'Redo', 'Undo',
            // UI keys
            'Accept', 'Again', 'Attn', 'Cancel', 'ContextMenu', 'Escape', 'Execute', 'Find', 'Finish', 'Help', 'Pause', 'Play', 'Props', 'Select', 'ZoomIn', 'ZoomOut',
            // Device keys
            'BrightnessDown', 'BrightnessUp', 'Eject', 'LogOff', 'Power', 'PowerOff', 'PrintScreen', 'Hibernate', 'Standby', 'WakeUp',
            // Function keys
            'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
            // Numeric keypad keys
            'Decimal', 'Key11', 'Key12', 'Multiply', 'Add', 'Divide', 'Subtract', 'Separator',
            // Number keys
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];

        if (keys.includes(key)) {
            this.showKey(key);
        } else {
            console.log('invalid key')
            
        }
    }

    showKey(key) {
        console.log('showing key')
        const display = document.getElementById('keyDisplay');
        if (display) {
            display.textContent = `You pressed ${key}!`;
        }
        this.unlockAchievement(key);
    }

    unlockAchievement(key) {
        console.log('achievement unlocked')
        const achievement = document.querySelector(`p.locked[data-key="${key}"]`);
        if (achievement) {
            achievement.className = 'unlocked';
        }
    }
}

// Initialize classes
new Router();
new EventManager();
