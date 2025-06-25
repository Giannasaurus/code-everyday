# Simple Joke Generator
## Gallery / Interface
<img src="https://github.com/user-attachments/assets/6989d89a-7d4f-4fee-83b2-df3d2e5a4bd4" width="500">
<img src="https://github.com/user-attachments/assets/13d5bf86-734c-4720-b28d-4915d1a26d7f" width="500">

## What the code does
### Main Features
#### Fetch and Display Jokes
- When the user clicks the "Get Joke" button, the app:
- Collects the selected joke categories (like Programming, Misc, etc.).
- Collects selected blacklist filters (e.g., exclude jokes with certain content).
- Collects the joke type preference (e.g., single-line or two-part jokes).
- Constructs a URL using these selections to request a joke from the JokeAPI.
- Fetches a random joke using the API and displays it on the page.

#### Category Selection Controls
- There are two main options for selecting categories: "Any" (all categories) or "Custom" (user-chosen categories).
- If "Any" is selected, custom category checkboxes are disabled.
- If "Custom" is selected, category checkboxes become enabled, and an asterisk/red highlight appears on the custom option to indicate it needs attention (unless at least one category is checked).

#### UI Feedback and Validation
- The script visually cues the user (by adding/removing CSS classes) if custom categories are selected but none are checked.
- It also logs information to the console about the user’s current selections for debugging or development.

#### DOM Initialization
- On page load, if "Any" is preselected, custom checkboxes are disabled accordingly.

#### Key Functions
- Joke Fetching (`jokeButton.addEventListener('click', ...)`): Handles constructing the API request and updating the UI with the fetched joke.
- Custom Category Controls (`updateCustomAsterisk, removeOrAddClass`): Handle enabling/disabling checkboxes and visual cues based on user selections.
- Event Listeners: Ensure UI updates dynamically as the user changes their category selection.

#### Error Handling
- If fetching a joke fails, it displays a friendly error message: "Oops! Failed to get a joke."

---
## References:
- [JokeAPI](https://sv443.net/jokeapi/v2/) by [Sven Fehler](https://github.com/Sv443)!

### Other helpful resources:
- Fireship
>[RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express](https://youtu.be/-MTSQjw5DrM?si=bvqZoE_xKSv30c0P)
