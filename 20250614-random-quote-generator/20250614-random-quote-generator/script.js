const genBtn = document.querySelector("button");
console.log("genBtn: Hello :D");

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
];
console.log("we have the quotes!");

genBtn.addEventListener("click", () => {
    generateQuote();
    console.log("added event listener and called generateQuote()");
});

function generateQuote() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];
    console.log("randomNum is in!");
    console.log("randomQuote too!");

    craftCard(randomQuote.quote, randomQuote.author);
    console.log("We called craftCard()!");
}

function craftCard(quote, author) {
    const card = document.createElement("div");
    card.classList.add("card-style");
    card.textContent = `"${quote}" -${author}`;
    document.body.append(card);
    console.log("Card created!!!");
}
