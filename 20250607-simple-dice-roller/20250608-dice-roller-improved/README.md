# Improved Code
- Separated universal, body, and root styles into a `global.css` stylesheet
- Implemented root variables for repetitive values
- Grouped selectors with similar styles
- Separated JavaScript variables with a comma, instead of rewriting `const`

# Problems & Solutions
1. Problem: Using margin: 0 auto; on .die p did not center the dice number, because the number was set directly as the innerHTML of .die without a `<p>` tag. <br/>
Solution: Either use flexbox on **.die** to center any content, or update your JavaScript to wrap the number in a `<p>` tag (e.g., `die1.innerHTML = <p>${result1}</p>;`). This allows **.die p** CSS to apply as expected.

3. Problem: CSS was somewhat verbose and repetitive, with repeated values and similar style blocks. <br/>
Solution: Use CSS custom properties (variables) for repeated values, group selectors with shared styles, and use utility classes for common patterns. This makes your CSS easier to maintain and update.

5. Problem: Attempting to declare multiple const variables without assignment caused a syntax error. <br/>
Solution: Always assign a value when declaring a variable with const, either on separate lines or using commas and assignments in a single statement.
