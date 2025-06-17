# Problems & Solutions
1. **Problem: .button-light-theme class was not applying to buttons.** <br/>
Solution: Ensure the class is added to button elements in the HTML or via JavaScript using `classList.add()` or `classList.toggle()`.

2. **Problem: Theme toggle did not update button or icon styles as expected.** <br/>
Solution: Use a persistent variable (e.g., `isLightTheme`) outside the function to track state, and update all relevant elements and icons inside the toggle function.

3. **Problem: Could not set .src on a button element.** <br/>
Solution: Only set .src on `<img>` elements, not buttons. If the image is inside a button, select the `<img>` with `querySelector('img')` and update its src.

4. **Problem: Removing the last card did not work as expected.** <br/>
Solution: Use `document.querySelectorAll('.card-style')` to select all cards and call `.remove()` on the last one.

5. **Problem: generateQuote did not produce unique quotes.** <br/>
Solution: Declare `usedIndexes` outside the function so it persists between calls, ensuring each quote is only used once until all have been shown.
