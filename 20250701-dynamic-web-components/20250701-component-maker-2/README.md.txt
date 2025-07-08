Problem:
Trying to access the uploaded image file using document.getElementById('img').src = URL.createObjectURL(e.target.img.files[0]); in getInfo().
Solution:
You should not set the src property of the file input element. Instead, just use URL.createObjectURL(e.target.img.files[0]) to get the image URL and assign it to a variable. Example:
let imgURL = '';
if (e && e.target.img && e.target.img.files.length > 0) {
    imgURL = URL.createObjectURL(e.target.img.files[0]);
}
Problem:
Directly accessing e.target.img.files[0] assumes the event target has an img property, which may not always be true depending on the event source.
Solution:
Always check if e.target.img exists and has files before accessing it, as shown above.

Problem:
Passing the event object (e) is necessary for file access, but if you call getInfo() without an event, it will fail.
Solution:
Always pass the event object from the form submit handler to createIdCard and then to getInfo.

Problem:
Setting the src property of the file input (img.src = ...) is not valid and has no effect.
Solution:
Remove img.src = ... and only use the generated URL for displaying the image in the ID card.

Problem:
If no file is selected, e.target.img.files[0] will be undefined, causing errors.
Solution:
Add a check to ensure a file is selected before calling URL.createObjectURL.