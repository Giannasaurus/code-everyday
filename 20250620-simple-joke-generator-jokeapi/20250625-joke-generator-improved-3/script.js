const jokeButton = document.getElementById('getJoke');
const jokeDisplay = document.getElementById('jokeDisplay');

const baseURL = 'https://sv443.net/jokeapi/v2/joke/';

jokeButton.addEventListener('click', async () => {
    try {
        // Get selected categories
        const checkedCategories = Array.from(document.querySelectorAll('input[name="category"]:not(#custom):checked'));
        const categories = checkedCategories.map(cb => cb.value).join(',') || 'Any';
        console.log(categories);

        const checkedValues = [];
        for (let cb of checkedCategories) {
            checkedValues.push(cb.value);
        }
        console.log(checkedValues); // This will log the value of each checked checkbox

        // Get selected language
        const language = document.getElementById('langSelect').value;
        console.log(language);

        // Get selected blacklist flags
        const blacklisted = Array.from(document.querySelectorAll('input[name="blacklist"]:checked')).map(cb => cb.value).join(',');
        console.log(blacklisted || "None selected");

        // Get response format
        const format = document.querySelector('input[name="format"]:checked').value;
        console.log(format);

        // Get selected type
        const type = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value).join(',');
        console.log(type || "None selected");

        // Construct URL with a category as default param
        let url = `${baseURL}${categories}?`;

        // Add language, blacklistFlags, and type params (if selected) to URL
        let params = [];
        if (language) params.push(`lang=${language}`)
        if (blacklisted) params.push(`blacklistFlags=${blacklisted}`);
        if (format) params.push(`format=${format}`);
        if (type) params.push(`type=${type}`);
        if (params.length) url += params.join('&');

        const response = await fetch(url);
        let data;
        if (format === "json") {
            data = await response.json();
            jokeDisplay.innerHTML = `${JSON.stringify(data, null, 2)}`;
        } else {
            data = await response.text();
            jokeDisplay.textContent = data;
        }
        console.log(url, data);
    }
    catch (error) {
        jokeDisplay.textContent = "Oops! Failed to get a joke.";
        console.error("Error fetching joke: ", error);
    }
})

const anyRadio = document.getElementById('any');
const customRadio = document.getElementById('custom');
const categoryCheckboxes = Array.from(document.querySelectorAll('input[name="category"]:not(#any):not(#custom)'));

function updateCustomAsterisk() {
    const customInputClass = customRadio.classList;
    const customLabelClass = document.querySelector('label[for="custom"]').classList;

    //     if (anyRadio.checked) {
    //         categoryCheckboxes.forEach(cb => cb.disabled = true);
    //         customInputClass.remove('show-asterisk');
    //         customLabelClass.remove('red-custom');
    //     } else if (customRadio.checked) {
    //         categoryCheckboxes.forEach(cb => cb.disabled = false);
    //         customInputClass.add('show-asterisk');
    //         customLabelClass.add('red-custom');

    //         if (categoryCheckboxes.some(cb => cb.checked)) {
    //             customInputClass.remove('show-asterisk');
    //             customLabelClass.remove('red-custom');
    //         }

    //         console.log(customInputClass.contains('show-asterisk'));
    //         console.log(customLabelClass.contains('red-custom'));
    //     }
    // }

    // Some modularity experiment
    if (anyRadio.checked) {
        categoryCheckboxes.forEach(cb => cb.disabled = true);
        removeOrAddClass(customInputClass, customLabelClass, "remove");
    } else if (customRadio.checked) {
        categoryCheckboxes.forEach(cb => cb.disabled = false);
        removeOrAddClass(customInputClass, customLabelClass, "add");

        if (categoryCheckboxes.some(cb => cb.checked)) {
            customInputClass.remove('show-asterisk');
            customLabelClass.remove('red-custom');
        }

        console.log(customInputClass.contains('show-asterisk'));
        console.log(customLabelClass.contains('red-custom'));
    }
}

function removeOrAddClass(inputClass, labelClass, condition) {
    if (condition === "remove") {
        inputClass.remove('show-asterisk');
        labelClass.remove('red-custom');
    } else {
        inputClass.add('show-asterisk');
        labelClass.add('red-custom');
    }
}

anyRadio.addEventListener('change', updateCustomAsterisk);
customRadio.addEventListener('change', updateCustomAsterisk);

document.addEventListener('DOMContentLoaded', () => {
    if (anyRadio.checked) categoryCheckboxes.forEach(cb => cb.disabled = true);
})