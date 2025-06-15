const genBtn = document.querySelector("button");

const quotes = [
    {
        author: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop.",
    },
    {
        author: "Aristotle",
        quote: "Love is composed of a single soul inhabiting two bodies.",
    },
    {
        author: "Immanuel Kant",
        quote:
            "Experience without theory is blind, but theory without experience is mere intellectual play.",
    },
    {
        author: "Herbert Spencer",
        quote:
            "The great aim of education is not knowledge but action.",
    },
    {
        author: "Han Fei",
        quote:
            "I believe it is impossible to be sure of anything.",
    }
];

genBtn.addEventListener("click", () => {
    generateQuote();
});

function generateQuote() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];

    const quote = randomQuote.quote;
    const author = randomQuote.author;

    craftCard(quote, author);
}

function craftCard(quote, author) {
    const card = document.createElement("div");
    const cardWrapper = document.getElementById('cardWrapper');
    const quoteText = document.createElement('p');
    const authorText = document.createElement('p');

    quoteText.textContent = `"${quote}"`;
    authorText.textContent = `— ${author}`;
    authorText.classList.add("author-text-style");
    card.append(quoteText);
    card.append(authorText);
    card.classList.add("card-style");
    cardWrapper.append(card);
    document.body.append(cardWrapper);
    console.log("Card created: ", quote, author);
}