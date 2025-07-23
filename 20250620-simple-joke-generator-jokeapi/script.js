const jokeButton = document.getElementById('getJoke');
const jokeDisplay = document.getElementById('jokeDisplay');

let baseURL = 'https://sv443.net/jokeapi/v2/joke/Any';

jokeButton.addEventListener('click', async () => {
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);

        if (data.type === "single") {
            jokeDisplay.textContent = data.joke;
        } else {
            jokeDisplay.textContent = `${data.setup} ... ${data.delivery}`;
        }
    }
    catch (error) {
        jokeDisplay.textContent = "Oops! Failed to get a joke.";
        console.error(`Error fetching joke: ", error`);
    }
})