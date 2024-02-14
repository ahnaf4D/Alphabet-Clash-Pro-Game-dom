function functionKeyPress(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    if (playerPressed === expectedAlphabet) {
        console.log("You get a point")
    }
    else {
        console.log('you missed. You lost a life');
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