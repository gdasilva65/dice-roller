function rollDice() {
    const resultsContainer = document.getElementById('diceResults');
    resultsContainer.innerHTML = ''; // Clears previous results

    for (let i = 0; i < 5; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; // Generates a random number between 1 and 6
        const diceElement = document.createElement('div');
        diceElement.classList.add('dice');
        diceElement.textContent = roll; // Sets the dice number
        resultsContainer.appendChild(diceElement); // Adds the dice to the results container
    }
}

// Ensure the dice roll when the page loads and the roll button is focused
window.onload = () => {
    rollDice(); // Rolls the dice automatically when the page loads
    document.getElementById('rollButton').focus(); // Focuses the roll button
};
