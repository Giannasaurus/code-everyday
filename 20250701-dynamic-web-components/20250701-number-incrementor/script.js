/* vanilla js */
/* 
const card = document.getElementById('card');
const heading = document.createElement('h1');
heading.innerText = 'Code Challenge #1';
const numVal = document.createElement('input');
numVal.setAttribute('id', 'num');
numVal.setAttribute('type', 'text');
numVal.setAttribute('placeholder', '0');
const paragraph = document.createElement('p');
paragraph.innerText =
    'Create and style a centered card component like this with your own original design. Then add JavaScript logic to increment the hidden input number with each button click.';
const changeVal = document.createElement('button');
changeVal.setAttribute('id', 'changeVal');
changeVal.textContent = 'Change Value';
const footer = document.createElement('footer');
footer.innerHTML = 'ShaunPx1 get source code here: <a href="https://github.com/shaungt1/Code-Challenge-1" target="_blank">Git repo</a>';

card.append(heading, numVal, paragraph, changeVal, footer);

let incr = 0;
changeVal.addEventListener('click', () => {
    numVal.value = incr++;
    console.log(incr);
});

numVal.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        e.preventDefault();
        incr = Number(numVal.value) || 0;
    }
})

document.addEventListener('click', e => {
    if (e.target !== numVal && e.target !== changeVal)
        incr = Number(numVal.value);
}, true)

// -------------------------------------------------------------------------
/* jquery */
$(document).ready(() => {
    const card = $('#card');
    const heading = $('<h1></h1>').text('Code Challenge #1');
    const numVal = $('<input>');
    numVal.attr({
        'id': 'num',
        'type': 'text',
        'placeholder': '0'
    });
    const paragraph = $('<p></p>').text('Create and style a centered card component like this with your own original design. Then add JavaScript logic to increment the hidden input number with each button click.');
    const changeVal = $('<button></button>').attr('id', 'changeVal').text('Change Value');
    const footer = $('<footer></footer>').html('ShaunPx1 get source code here: <a href="https://github.com/shaungt1/Code-Challenge-1" target="_blank">Git repo</a>');

    card.append(heading, numVal, paragraph, changeVal, footer);

    let incr = 0;
    changeVal.click(() => {
        numVal.val(incr++);
        console.log(incr);
    });

    numVal.keydown(e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            incr = Number(numVal.val()) || 0;
        }
    })

    $(document).click(e => {
        if (e.target !== numVal && e.target !== changeVal)
            incr = Number(numVal.val());
    }, true)
});