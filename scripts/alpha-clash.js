function functionKeyPress(event) {
    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (playerPressed === expectedAlphabet) {
        console.log("You get a point");
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        // start  new round
        console.log("You pressed correctly", expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', functionKeyPress);
function continueGame() {
    // Step 1 : Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // set random generated alphabet to the screen(show)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set background color
    addBackgroundColorById(alphabet);
}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}