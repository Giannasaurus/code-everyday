# Problems & Solutions
1. Problem: #jokeDisplay and #jokeDisplay pre content overflows or does not wrap on small screens. <br/>
   Solution: Add or ensure `white-space: pre-wrap;` and `word-break: break-word;` are set for both `#jokeDisplay` and `#jokeDisplay pre` (already present in your CSS).

2. Problem: main or footer elements do not expand to fit their content, causing layout issues. <br/>
   Solution: Remove any fixed height or min-height from main and footer so they grow with content (your CSS does not set a fixed height, so this is correct).

3. Problem:  Legend and select elements in fieldsets do not align horizontally as intended. <br/>
   Solution: Use Flexbox on the fieldset (e.g., `.language-fieldset { display: flex; align-items: center; }`) and set `legend { display: block; margin: 0; }` to override browser defaults.

4. Problem: Redundant or repeated CSS rules for #jokeDisplay, #jokeDisplay pre in both main and media query sections. <br/>
   Solution: Keep these rules only once, unless you need to override them specifically for small screens.

5. Problem: Use of !important in .custom-options may cause specificity issues and make future maintenance harder. <br/>
   Solution: Try to avoid `!important` by increasing selector specificity or restructuring your HTML/CSS if possible.

6. Problem: No syntax highlighting for JSON output in #jokeDisplay. <br/>
   Solution: Wrap JSON output in a `<pre>` tag and optionally use a library or custom CSS for syntax highlighting.
