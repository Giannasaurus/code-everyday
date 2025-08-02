const cardWrapper = document.getElementById('cardWrapper');
const genBtn = document.querySelector("#genBtn");

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
        quote: "Experience without theory is blind, but theory without experience is mere intellectual play.",
    },
    {
        author: "Herbert Spencer",
        quote: "The great aim of education is not knowledge but action.",
    },
    {
        author: "Han Fei",
        quote: "I believe it is impossible to be sure of anything.",
    },
    {
        author: "Georg Wilhelm Friedrich Hegel",
        quote: "Nothing great in the world has ever been accomplished without passion.",
    },
    {
        author: "Eleanor Roosevelt",
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    },
    {
        author: "Vincent Van Gogh",
        quote: "Great things are done by a series of small things brought together."
    },
    {
        author: "Winston Churchill",
        quote: "The price of greatness is responsibility."
    },
    {
        author: "Leonard Bernstein",
        quote: "To achieve great things, two things are needed; a plan, and not quite enough time.",
    },
    {
        author: "John Wooden",
        quote: "If you don't have time to do it right, when will you have time to do it over?"
    },
    {
        author: "Albert Einstein",
        quote: "The only reason for time is so that everything doesn't happen at once."
    },
    {
        author: "Bil Keane",
        quote: "Yesterday's the past, tomorrow's the future, but today is a gift. That's why it's called the present.",
    },
    {
        author: "Barack Obama",
        quote: "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
    },
    {
        author: "Dalai Lama",
        quote: "Love and compassion are necessities, not luxuries. Without them humanity cannot survive.",
    }
];

genBtn.addEventListener("click", () => {
    generateQuote();
});

let usedIndexes = [];
function generateQuote() {
    if (usedIndexes.length === quotes.length) usedIndexes = [];

    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * quotes.length);
    } while (usedIndexes.includes(randomNum));

    usedIndexes.push(randomNum);
    const { quote, author } = quotes[randomNum];
    craftCard(quote, author);
}

function craftCard(quote, author) {
    const card = document.createElement("div");
    const quoteText = document.createElement('p');
    const authorText = document.createElement('p');

    quoteText.textContent = `"${quote}"`;
    authorText.textContent = `— ${author}`;
    authorText.classList.add("author-text-style");

    card.append(quoteText, authorText);
    card.classList.add("card-style");
    cardWrapper.append(card);

    console.log("Card created: ", quote, author);
}

class IconManager {
    const clearIcon = document.querySelector("#clearIcon");
    clearIcon.addEventListener('click', () => {
        cardWrapper.innerHTML = "";
    })

const backspaceIcon = document.querySelector('#backspaceIcon');
backspaceIcon.addEventListener('click', () => {
    const nlCards = document.querySelectorAll('[class="card-style"]');
    if (nlCards.length > 0) nlCards[nlCards.length - 1].remove();
})

const switchIcon = document.querySelector("#switchIcon");
switchIcon.addEventListener('click', () => {
    toggleTheme();
})
}

let isLightTheme = false;
function toggleTheme() {
    document.body.classList.toggle('body-light-theme');
    genBtn.classList.toggle('button-light-theme');
    isLightTheme = !isLightTheme;
    updateIcons();
    console.log(`Switched to ${isLightTheme ? "light" : "dark"} theme`);
}

function updateIcons() {
    const color = isLightTheme ? "000" : "fff";
    clearIcon.src = `img/df-70-${color}-png.png`;
    backspaceIcon.src = `img/b-70-${color}-png.png`;
    switchIcon.src = `img/lm-70-${color}-png.png`;
}