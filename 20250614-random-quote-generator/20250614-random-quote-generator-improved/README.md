# Problems & Solutions
1. Problem: align-items: flex-start; did not apply as expected. <br/>
 Solution/Suggestion/Tip: Check if the container uses display: grid or display: flex. For grid, use align-items: start; instead of flex-start.

2. Problem: #cardWrapper did not fill the remaining vertical space. <br/>
 Solution/Suggestion/Tip: Set html, body, and parent containers to height: 100%, and use flex: 1 or height: 100% on #cardWrapper when using a flex column layout.

3. Problem: Author text would not align to the bottom of the card. <br/>
 Solution/Suggestion/Tip: Use display: flex; flex-direction: column; on the card and margin-top: auto; on the author text, or use position: absolute; bottom: ...; with position: relative; on the card.

4. Problem: text-align: right stopped working for the author text. <br/>
 Solution/Suggestion/Tip: Ensure .author-text-style has width: 100% and is not overridden by other CSS. Check for specificity issues or parent containers affecting alignment. Use browser DevTools to debug.
