document.addEventListener('keydown', e => {
    e.preventDefault(); 
    switch(e.key) {
        // Modifier keys
        case 'Alt':
            showKey(e.key);
            break;
        case 'AltGraph':
            showKey(e.key);
            break;
        case 'CapsLock': // Fixed typo: 'Capslock' -> 'CapsLock'
            showKey(e.key);
            break;
        case 'Control':
            showKey(e.key);
            break;
        case 'Fn':
            showKey(e.key);
            break;
        case 'FnLock':
            showKey(e.key);
            break;
        case 'Hyper':
            showKey(e.key);
            break;
        case 'Meta':
            showKey(e.key);
            break;
        case 'NumLock':
            showKey(e.key);
            break;
        case 'ScrollLock':
            showKey(e.key);
            break;
        case 'Shift':
            showKey(e.key);
            break;
        case 'Super':
            showKey(e.key);
            break;
        case 'Symbol':
            showKey(e.key);
            break;
        case 'SymbolLock':
            showKey(e.key);
            break;
        // Whitespace keys
        case 'Enter':
            showKey(e.key);
            break;
        case 'Tab':
            showKey(e.key);
            break;
        case ' ':
            showKey(e.key);
            break;
        // Navigation keys
        case 'ArrowDown':
            showKey(e.key);
            break;
        case 'ArrowLeft':
            showKey(e.key);
            break;
        case 'ArrowRight':
            showKey(e.key);
            break;
        case 'ArrowUp':
            showKey(e.key);
            break;
        case 'End':
            showKey(e.key);
            break;
        case 'Home':
            showKey(e.key);
            break;
        case 'PageDown':
            showKey(e.key);
            break;
        case 'PageUp':
            showKey(e.key);
            break;
        // Editing keys
        case 'Backspace':
            showKey(e.key);
            break;
        case 'Clear':
            showKey(e.key);
            break;
        case 'Copy':
            showKey(e.key);
            break;
        case 'CrSel':
            showKey(e.key);
            break;
        case 'Cut':
            showKey(e.key);
            break;
        case 'Delete':
            showKey(e.key);
            break;
        case 'EraseEof':
            showKey(e.key);
            break;
        case 'ExSel':
            showKey(e.key);
            break;
        case 'Insert':
            showKey(e.key);
            break;
        case 'Paste':
            showKey(e.key);
            break;
        case 'Redo':
            showKey(e.key);
            break;
        case 'Undo':
            showKey(e.key);
            break;
        // UI keys
        case 'Accept':
            showKey(e.key);
            break;
        case 'Again':
            showKey(e.key);
            break;
        case 'Attn':
            showKey(e.key);
            break;
        case 'Cancel':
            showKey(e.key);
            break;
        case 'ContextMenu':
            showKey(e.key);
            break;
        case 'Escape':
            showKey(e.key);
            break;
        case 'Execute':
            showKey(e.key);
            break;
        case 'Find':
            showKey(e.key);
            break;
        case 'Finish':
            showKey(e.key);
            break;
        case 'Help':
            showKey(e.key);
            break;
        case 'Pause':
            showKey(e.key);
            break;
        case 'Play':
            showKey(e.key);
            break;
        case 'Props':
            showKey(e.key);
            break;
        case 'Select':
            showKey(e.key);
            break;
        case 'ZoomIn':
            showKey(e.key);
            break;
        case 'ZoomOut':
            showKey(e.key);
            break;
        // Device keys
        case 'BrightnessDown':
            showKey(e.key);
            break;
        case 'BrightnessUp':
            showKey(e.key);
            break;
        case 'Eject':
            showKey(e.key);
            break;
        case 'LogOff':
            showKey(e.key);
            break;
        case 'Power':
            showKey(e.key);
            break;
        case 'PowerOff':
            showKey(e.key);
            break;
        case 'PrintScreen':
            showKey(e.key);
            break;
        case 'Hibernate':
            showKey(e.key);
            break;
        case 'Standby':
            showKey(e.key);
            break;
        case 'WakeUp':
            showKey(e.key);
            break;
        // Function keys
        case 'F1':
            showKey(e.key);
            break;
        case 'F2':
            showKey(e.key);
            break;
        case 'F3':
            showKey(e.key);
            break;
        case 'F4':
            showKey(e.key);
            break;
        case 'F5':
            showKey(e.key);
            break;
        case 'F6':
            showKey(e.key);
            break;
        case 'F7':
            showKey(e.key);
            break;
        case 'F8':
            showKey(e.key);
            break;
        case 'F9':
            showKey(e.key);
            break;
        case 'F10':
            showKey(e.key);
            break;
        case 'F11':
            showKey(e.key);
            break;
        case 'F12':
            showKey(e.key);
            break;
        // Numeric keypad keys
        case 'Decimal':
            showKey(e.key);
            break;
        case 'Key11':
            showKey(e.key);
            break;
        case 'Key12':
            showKey(e.key);
            break;
        case 'Multiply':
            showKey(e.key);
            break;
        case 'Add':
            showKey(e.key);
            break;
        case 'Divide':
            showKey(e.key);
            break;
        case 'Subtract':
            showKey(e.key);
            break;
        case 'Separator':
            showKey(e.key);
            break;
        case '0':
            showKey(e.key);
            break;
        case '1':
            showKey(e.key);
            break;
        case '2':
            showKey(e.key);
            break;
        case '3':
            showKey(e.key);
            break;
        case '4':
            showKey(e.key);
            break;
        case '5':
            showKey(e.key);
            break;
        case '6':
            showKey(e.key);
            break;
        case '7':
            showKey(e.key);
            break;
        case '8':
            showKey(e.key);
            break;
        case '9':
            showKey(e.key);
            break;
    }
})

function showKey(key) {
    const display = document.getElementById('keyDisplay');
    display.textContent = `You pressed ${key}!`;
}