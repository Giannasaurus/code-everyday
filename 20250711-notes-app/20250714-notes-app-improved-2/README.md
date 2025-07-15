Problem: note.createAttributes is not a function
Solution: Call the standalone function createAttributes(note) instead of note.createAttributes().

Problem: noteTitle is not defined
Solution: Pass noteTitle as an argument to functions that need it, or use the correct variable scope.

Problem: noteDate style not applying
Solution: Create a <p> element for the date, set its className, and append it to the note element.

Problem: elements is not defined
Solution: Declare the elements object in the global scope, not inside a function or event listener.

Problem: Cannot read properties of undefined (reading 'replace')
Solution: Ensure titleVal is defined when calling insertContent; use note properties when rendering notes.

Problem: Date format includes seconds
Solution: Use toLocaleString with options to exclude seconds and format as "M/D/YYYY h:mma".

Problem: Passing undefined variables to renderNotes
Solution: Refactor renderNotes to loop through the notes array and use each note’s properties.