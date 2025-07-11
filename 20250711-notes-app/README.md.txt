Problem: The .filler component did not disappear when a note was added.
Solution: Hide .filler by checking the number of notes in the container after adding a note.

Problem: Button emoji toggle did not work as expected due to incorrect use of this in an arrow function.
Solution: Use a regular function for the event listener so this refers to the button element.

Problem: Text truncation with ellipsis for .note h2 and .note p stopped working.
Solution: Ensure correct CSS syntax, use vendor prefixes, and verify HTML structure and container size.

Problem: margin: auto did not center absolutely positioned elements.
Solution: Use left: 50% and transform: translateX(-50%) for horizontal centering.

Problem: height: 100vh did not make the page fill the viewport.
Solution: Set both html and body to height: 100% and use min-height: 100vh.

Problem: .savingNote did not fade out after saving a note.
Solution: Show the element, then use a timeout and CSS transition to fade and hide it.