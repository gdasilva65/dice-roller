function rollDice() {
    const resultsContainer = document.getElementById('diceResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    for (let i = 0; i < 5; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
        const diceElement = document.createElement('div');
        diceElement.classList.add('dice');
        diceElement.textContent = roll;
        resultsContainer.appendChild(diceElement);
    }
}

document.getElementById('rollButton').onload = rollDice(); // Automatically roll when the page is loaded
