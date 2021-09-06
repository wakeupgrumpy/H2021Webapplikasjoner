// Henter html elementer
const displayWord = document.getElementById("word");
const displayPrevLetter = document.getElementById("letter");
const displayErrorCount = document.getElementById("wrongs");
const buttonStart = document.querySelector("button");

// Lytter til klikk-event på startknappen
buttonStart.onclick = () => startGame();

// Liste med ord som brukeren skal skrive
const wordList = ["Eplekake", "Fredagstaco", "Vinkveld", "Pepperkake"];

// Variabler
let errorCount = (currentWordIndex = currentLetterIndex = 0);

// Når spillet er i gang, registreres tastetrykk
const userKeyPressed = (key) => {
  let keyPressed = (displayPrevLetter.innerText = key.toUpperCase());
  // Sjekker om input er lik bokstven i ordet
  if (keyPressed === currentLetter())
    currentLetterIndex < currentWord().length - 1
      ? updateWordDisplay(++currentLetterIndex)
      : getWordFromList(currentWordIndex++);
  else {
    displayErrorCount.innerText = ++errorCount;
  }
};

// Returnerer aktuelt ord / bokstav
const currentLetter = () => currentWord()[currentLetterIndex];
const currentWord = () => wordList[currentWordIndex].toUpperCase();

// Aktiverer eventhandler på keyup og kaller funksjon som henter første ord fra listen
const startGame = () => {
  window.onkeyup = (e) => userKeyPressed(e.key);
  buttonStart.disabled = true;
  getWordFromList();
};

// Henter ord fra listen, hvis spillet er ferdig, skriv ut status og aktiver startknapp
const getWordFromList = (wordIndex = 0) => {
  if (wordIndex < wordList.length - 1)
    updateWordDisplay((currentLetterIndex = 0));
  else {
    displayWord.innerText = displayPrevLetter.innerText = "";
    displayErrorCount.innerText = `Spillet er fedig! Du klarte det med ${errorCount} feil.`;

    buttonStart.disabled = false;
    window.onkeyup = null;
    currentWordIndex = 0;
  }
};

// Oppdaterer visning av ordet som er aktivt i spillet
const updateWordDisplay = (letterIndex) => {
  let greenLeteres = currentWord().slice(0, letterIndex);
  let blueLetters = currentWord().slice(letterIndex + 1);

  displayWord.innerHTML = `${greenLeteres.fontcolor(
    "green"
  )}${currentLetter().bold()}${blueLetters.fontcolor("blue")}`;
};
