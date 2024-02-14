function functionKeyPress(event) {
    const playerPressed = event.key; // detect key here
    console.log('player pressed', playerPressed); // show detected key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText; // random key stored
    const expectedAlphabet = currentAlphabet.toLowerCase(); // make lowercase
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