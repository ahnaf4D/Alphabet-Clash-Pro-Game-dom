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
