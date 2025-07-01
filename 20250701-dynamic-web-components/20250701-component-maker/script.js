function renderIdCardMaker() {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'wrapper');

    const heading = document.createElement('h1');
    heading.textContent = 'Create College ID';

    const form = document.createElement('form');

    const idPicture = document.createElement('input');
    idPicture.setAttribute('id', 'idPicture');
    idPicture.setAttribute('type', 'image');

    const idNameLabel = document.createElement('label');
    idNameLabel.textContent = 'Enter full name';
    idPicture.setAttribute('for', 'idNameInput');
    const idNameInput = document.createElement('input');
    idPicture.setAttribute('id', 'idNameInput');
    idPicture.setAttribute('type', 'text');

    const idYearLabel = document.createElement('label');
    idYearLabel.textContent = 'Choose year level';
    idPicture.setAttribute('for', 'idYearInput');
    const idYearField = document.createElement('fieldset');
    const year1radio = document.createElement('input');
    year1radio.setAttribute('type', 'radio');
    year1radio.setAttribute('name', 'year-option');
    const year1label = document.createElement('label');
    year1label.textContent = 'Year 1';
    const year2radio = document.createElement('input');
    year2radio.setAttribute('type', 'radio');
    year2radio.setAttribute('name', 'year-option');
    const year2label = document.createElement('label');
    year2label.textContent = 'Year 2';
    const year3radio = document.createElement('input');
    year3radio.setAttribute('type', 'radio');
    year3radio.setAttribute('name', 'year-option');
    const year3label = document.createElement('label');
    year3label.textContent = 'Year 3';
    const year4radio = document.createElement('input');
    year4radio.setAttribute('type', 'radio');
    year4radio.setAttribute('name', 'year-option');
    const year4label = document.createElement('label');
    year4label.textContent = 'Year 4';
    idYearField.append(year1radio, year1label, year2radio, year2label, year3radio, year3label, year4radio, year4label);

    const idCourseLabel = document.createElement('label');
    idCourseLabel.textContent = 'Enter course';
    const idCourseInput = document.createElement('input');
    idCourseInput.setAttribute('type', 'text');

    form.append(idPicture, idNameLabel, idNameInput, idYearLabel, idYearField, idCourseLabel, idCourseInput);
    wrapper.append(heading, form);
    document.body.appendChild(wrapper);
}

document.addEventListener('DOMContentLoaded', renderIdCardMaker);
console.log("DOM fully loaded and parsed");