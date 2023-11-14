document.addEventListener('DOMContentLoaded', function() {
    function diceRoll() {
        var dice1 = 1 + Math.floor(Math.random() * 6);
        var dice2 = 1 + Math.floor(Math.random() * 6);

        const dice = document.querySelectorAll('.dice');

        dice[0].innerHTML = `<img src="./assets/images/dice-six-faces-${dice1}.png" alt="player1 dice"> `;
        dice[1].innerHTML = `<img src="./assets/images/dice-six-faces-${dice2}.png" alt="player2 dice"> `;

        var heading = document.querySelector('h1');

        if (dice1 == dice2)
            heading.innerHTML = 'It is a Tie!';
        else if (dice1 > dice2)
            heading.innerHTML = 'Player 1 wins!';
        else
            heading.innerHTML = 'Player 2 wins!';
    }

    // Check if the page is being loaded for the first time or if it's a refresh
    if (performance.navigation.type === 1) {
        // Execute the function only on page refresh
        diceRoll();
    }
});
