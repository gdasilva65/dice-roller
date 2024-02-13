function rollDice() {
    const resultsContainer = document.getElementById('diceResults');
    resultsContainer.innerHTML = ''; 
    for (let i = 0; i < 5; i++) { 
        const roll = Math.floor(Math.random() * 6) + 1; 
        const diceElement = document.createElement('div');
        diceElement.classList.add('dice');
        diceElement.textContent = roll;
        resultsContainer.appendChild(diceElement);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('rollButton').focus(); 
});
