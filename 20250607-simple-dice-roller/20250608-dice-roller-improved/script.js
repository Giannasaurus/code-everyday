const die1 = document.querySelector("#die1");
const die2 = document.querySelector("#die2");
const resultText = document.querySelector("#resultText");
const rollButton = document.querySelector("#rollButton");

rollButton.addEventListener("click", e => {
    console.log(
        `%cAdded event listener to: %c${this.textContent}`,
        "color: #35C75C;", "color: #fff;"
    );
    rollDice();
});
x
function rollSingleDie() {
    console.log(
        `%cFunction called: %c${rollSingleDie.name}()`,
        "color: #35C75C;", "color: #fff;"
    );
    return Math.floor(Math.random() * 6 + 1);
}

function rollDice() {
    console.log("%cDice rolled!", "color: #35C75C;");

    const result1 = rollSingleDie();
    const result2 = rollSingleDie();
    console.log(`🎲 Dice 1 rolled a ${result1}`);
    console.log(`🎲 Dice 2 rolled a ${result2}`);

    die1.innerHTML = result1;
    die2.innerHTML = result2;
    console.log("%cResults are out!", "color: #35C75C;");

    displayTotal(result1, result2);
}

function displayTotal(result1, result2) {
    const total = result1 + result2;
    resultText.innerHTML = `Total: ${total}`;
    console.log(
        `%c💯 Total rolled: %c${total}`,
        "color: #35C75C;", "color: #fff;");
}