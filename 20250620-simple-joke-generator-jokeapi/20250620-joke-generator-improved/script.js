const jokeButton = document.getElementById('getJoke');
const jokeDisplay = document.getElementById('jokeDisplay');

const baseURL = 'https://sv443.net/jokeapi/v2/joke/';

jokeButton.addEventListener('click', async () => {
    try {
        // Get selected categories
        const categories = Array.from(document.querySelectorAll('input[name="category"]:not(#custom):checked')).map(cb => cb.value).join(',') || 'Any';
        console.log(categories);

        // Get selected blacklist flags
        const blacklisted = Array.from(document.querySelectorAll('input[name="blacklist"]:checked')).map(cb => cb.value).join(',');
        console.log(blacklisted || "None selected");

        // Get selected type
        const type = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value).join(',');
        console.log(type || "None selected");

        // Construct URL
        let url = `${baseURL}${categories}?`;

        let params = [];
        if (blacklisted) params.push(`blacklistFlags=${blacklisted}`);
        if (type) params.push(`type=${type}`);
        if (params.length) url += params.join('&');

        const response = await fetch(url);
        const data = await response.json();
        console.log(url, data);

        jokeDisplay.textContent = data.joke || `${data.setup} ...${data.delivery}`;
    }
    catch (error) {
        jokeDisplay.textContent = "Oops! Failed to get a joke.";
        console.error("Error fetching joke: ", error);
    }
})

const anyRadio = document.getElementById('any');
const customRadio = document.getElementById('custom');
const categoryCheckboxes = Array.from(document.querySelectorAll('input[name="category"]:not(#any):not(#custom)'));

anyRadio.addEventListener('change', () => {
    if (anyRadio.checked) categoryCheckboxes.forEach(cb => cb.disabled = true);
    else categoryCheckboxes.forEach(cb => cb.disabled = false);
    document.getElementsByTagName('fieldset')[0].classList.remove('show-asterisk');
})

customRadio.addEventListener('change', () => {
    if (customRadio.checked) categoryCheckboxes.forEach(cb => cb.disabled = false);
    document.getElementsByTagName('fieldset')[0].classList.add('show-asterisk');
})

if (anyRadio.checked) {
    categoryCheckboxes.forEach(cb => cb.disabled = true);
}