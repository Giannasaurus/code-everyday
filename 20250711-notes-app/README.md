# Notes App
## Gallery
<img width="500" alt="image" src="https://github.com/user-attachments/assets/36e3a3e1-8cca-43b0-9ded-973e725d9335" />

## Problems & Solutions
Problem: The .filler component did not disappear when a note was added. <br/>
Solution: Hide .filler by checking the number of notes in the container after adding a note. <br/>

Problem: Button emoji toggle did not work as expected due to incorrect use of this in an arrow function. <br/>
Solution: Use a regular function for the event listener so this refers to the button element. <br/>

Problem: Text truncation with ellipsis for .note h2 and .note p stopped working. <br/>
Solution: Ensure correct CSS syntax, use vendor prefixes, and verify HTML structure and container size. <br/>

Problem: margin: auto did not center absolutely positioned elements. <br/>
Solution: Use left: 50% and transform: translateX(-50%) for horizontal centering. <br/>

Problem: height: 100vh did not make the page fill the viewport. <br/>
Solution: Set both html and body to height: 100% and use min-height: 100vh. <br/>

Problem: .savingNote did not fade out after saving a note. <br/>
Solution: Show the element, then use a timeout and CSS transition to fade and hide it. <br/>

---
## References
- [LEARN JavaScript by BUILDING a Note Taking App (HTML, CSS, JS Project)](https://www.youtube.com/watch?v=gzoifHuIsrI)
