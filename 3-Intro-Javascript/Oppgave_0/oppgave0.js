// Funksjon som tar id til ett element, og endrer tekst innholdet.
const changeTextInElement = (id, content = null) => {
  const element = document.getElementById(id);
  element
    ? (element.innerText = content)
    : console.log(`HTML element med id: ${id} finnes ikke.`);
};

// Oppgave 1
// Henter knappen fra DOM
const buttonRemove = document.getElementById("remove-btn");
// Legger på en event handler, som kaller funksjonen over.
buttonRemove.onclick = () => changeTextInElement("remove");

// Oppgave 2
// Samme som over bare på en linje.
document.getElementById("change-btn").onclick = () =>
  changeTextInElement("change", "Teksten er nå endret.");

// Oppgave 3
const userInputText = document.getElementById("input");
userInputText.oninput = () =>
  changeTextInElement("input-text", userInputText.value);

// Oppgave 4
// MyList med frukt strenger
const myList = ["Eple", "Drue", "Banan", "Mango"];
// Legger på click-eventhandler til knappen write-list
document.getElementById("write-list").onclick = () => {
  // Henter ul-elementet
  const listToAddElements = document.getElementById("ul");
  myList.forEach((e) => {
    // Går igjennom listen og lager ett nytt li-objekt med strengen fra listen
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(e));
    // Legger til det nye li objektet i ul
    listToAddElements.appendChild(li);
  });
};

// Oppgave 5
document.getElementById("create").onclick = () => {
  // Henter verdier fra select og text
  const selectedElementType = document.getElementById("select").value;
  const elementStringContent = document.getElementById("text").value;

  // Lager nytt html element
  const newElement = document.createElement(selectedElementType);
  newElement.appendChild(document.createTextNode(elementStringContent));

  // Legger til det nye elementet til placeholder
  document.getElementById("placeholder").appendChild(newElement);
};

// Oppgave 6
document.getElementById("remove-li").onclick = () => {
  const list = document.getElementById("list");
  // lastElementChild er siste li i ul-objektet
  list.removeChild(list.lastElementChild);
};

// Oppgave 7
const inputUsername = document.getElementById("name");
const buttonOrder = document.getElementById("order");

inputUsername.oninput = () => {
  buttonOrder.disabled = inputUsername.value.length > 4 ? true : false;
};

// Oppgave 8
document.getElementById("color").onclick = () => {
  const listOfLists = document.getElementsByClassName("children");

  for (let i = 0; i < listOfLists.length; i++) {
    const list = listOfLists[i].children;
    for (let i = 0; i < list.length; i++) {
      console.log(list[i]);
      list[i].style.border = i % 2 == 0 ? "2px solid green" : "2px solid pink";
    }
  }
};
