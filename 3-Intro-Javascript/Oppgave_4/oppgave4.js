// Henter HTML elementer
const displaySortingOrder = document.getElementById("desc");
const displayUserInput = document.getElementById("guess");
const displayNumbersToSort = document.getElementById("numbers");
const buttonCheckAnswer = document.querySelector("button");

// Listen med tall som skal sorteres
const numbers = [10, 6, 8, 21, 28];

// Når knappen klikkes, sjekkes den sorterte listene opp mot svaret
buttonCheckAnswer.onclick = () => {
  displaySortingOrder.innerHTML = compareAnswer(
    numbers.sort((a, b) => a - b),
    getAnswers()
  )
    ? "Gratulerer, dette var riktig!".fontcolor("green")
    : "Dette var ikke riktig, prøv igjen".fontcolor("red");
};

// Sammenligner hvert element i listene
const compareAnswer = (a, b) =>
  a.length === b.length && a.every((e, i) => e === b[i]);

// Gjør om fra en NodeList til Array og henter tallverdien fra feltet
const getAnswers = () =>
  [...document.querySelectorAll("input").values()].map(
    (input) => input.valueAsNumber
  );

// Lager input feltene og viser tallene som skal sorteres
const generateUserInerface = () => {
  numbers.forEach((num) => {
    let listElement = document.createElement("li");
    const inputbox = document.createElement("input");
    inputbox.type = "number";
    listElement.appendChild(inputbox);
    displayUserInput.appendChild(listElement);

    listElement = document.createElement("li");
    listElement.innerText = num;
    displayNumbersToSort.appendChild(listElement);
  });
};

generateUserInerface();
