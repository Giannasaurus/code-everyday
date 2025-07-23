# Problems & Solutions
1. Problem: When the "Any" radio button is selected, all category checkboxes (except "custom") should be disabled, but the logic and selector may not always work as intended, especially if the initial state is not set on page load. <br/>
   Solution: Use the selector `input[name="category"]:not(#any):not(#custom)` to exclude both "**any**" and "**custom**" from being disabled, and ensure the disabling logic runs on page load as well as on change events.

2. Problem: The asterisk (*) indicating a required selection for custom categories appears or disappears based only on radio button changes, not on checkbox changes. <br/>
   Solution: Add a function to check if "**custom**" is selected and no category checkboxes are checked, then toggle the `.show-asterisk` class accordingly. Attach this function to both the "**custom**" radio and all category checkbox change events.

3. Problem: If the value attribute is missing from checkboxes or radios, the default value sent to the API is "on", which is not valid for the JokeAPI and causes errors. <br/>
   Solution: Always set the correct value attribute for each input in the HTML to match the API's expected values.

4. Problem: The URL construction for the API call may result in an invalid query string if no parameters are present, or if parameters are joined incorrectly. <br/>
   Solution: Only append parameters if they exist, and ensure the query string is properly formatted.

5. Problem: The initial state of the form (e.g., disabling checkboxes when "Any" is selected) may not be set correctly when the page loads. <br/>
   Solution: Run the disabling logic once on page load to ensure the UI matches the selected radio button.
