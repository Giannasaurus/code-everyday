document.addEventListener('DOMContentLoaded', () => {
    const div = document.createElement('div');
    div.id = 'wrapper';
    document.body.appendChild(div);
    renderForm();
});

function renderForm() {
    document.getElementById('wrapper').innerHTML =
        `<h1>Create ID Card</h1>
            <form id="idForm">
                <fieldset>
                    <label for="lname">Last Name</label>
                    <input id="lname" type="text" name="name" placeholder="Dela Cruz" autocomplete="family-name"> <br>
                    <label for="fname">First Name</label>
                    <input id="fname" type="text" name="name" placeholder="Juan" autocomplete="given-name"> <br>
                    <label for="mname">Middle Name</label>
                    <input id="mname" type="text" name="name" placeholder="B. (Batongbakal)" autocomplete="on">
                </fieldset>

                <fieldset>
                    <legend>Year Level</legend>
                    <input id="yr1" type="radio" name="year">
                    <label for="yr1">Year 1</label>
                    <input id="yr2" type="radio" name="year">
                    <label for="yr2">Year 2</label>
                    <input id="yr3" type="radio" name="year">
                    <label for="yr3">Year 3</label>
                    <input id="yr4" type="radio" name="year" checked>
                    <label for="yr4">Year 4</label>
                </fieldset>

                <fieldset>
                    <label for="course">Course</label>
                    <input id="course" type="text" placeholder="BS Biology">
                </fieldset>

                <fieldset>
                    <label for="img">Photo</label>
                    <input id="img" type="file" accept="image/*">
                </fieldset>

                <button type="submit">Create ID Card</button>
            </form>`;
    document.head.append('<link rel="stylesheet" href="styles.css">');

    document.getElementById('idForm').addEventListener('submit', e => {
        e.preventDefault();
        createIdCard(e);
    });
}

function createIdCard(e) {
    const { fullName, yr, course, imgURL } = getInfo(e);
    document.getElementById('wrapper').innerHTML =
        `<div id="idCard">
            <img src="${imgURL}" alt="Student photo">
            <h2>${fullName}</h2>
            <p>${course}</p>
            <p>${yr}</p>
            <button id="edit">Edit info</button>
        </div>`;

    document.getElementById('edit').addEventListener('click', renderForm);
}

function getInfo(e) {
    const lname = document.getElementById('lname').value;
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const fullName = `${lname}, ${fname} ${mname}`;

    const yrInput = document.querySelector('input[name="year"]:checked');
    const label = document.querySelector(`label[for="${yrInput.id}"]`);
    const yr = label.textContent;

    const course = document.getElementById('course').value;
    const img = document.getElementById('img');
    const imgURL = URL.createObjectURL(e.target.img.files[0]);

    return { fullName, yr, course, imgURL };
}
