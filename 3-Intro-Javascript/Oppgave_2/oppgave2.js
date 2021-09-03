import { users } from "./src/util.js";

// HTML Elements
const inputName = document.getElementById("name");
const inputMinAge = document.getElementById("age");
const buttonFilter = document.getElementById("filter");
const outputUsersList = document.getElementById("users");

// Event Handlers
inputName.oninput = () => handleSearch(inputName.value);
inputMinAge.oninput = () => (buttonFilter.disabled = false);
buttonFilter.onclick = () => handleFilter(inputMinAge.value);

// Lager en kopi av users som vi kan manipulere
let result = users;
// Lagrer siste filtrerte verdi
let lastMin = 0;

// Oppdaterer grensesnittet med resultatet av søket
const showSearchResults = (users) => {
  // Tømmer listen
  outputUsersList.innerHTML = "";
  // Hvis det ikke finnes noe resultat, vis dette.
  users.length > 0 || users.push("Ingen resultat");
  // Lager ett nytt liste element per resultat i arrayen
  users.forEach((user) => {
    const newListElement = document.createElement("li");
    newListElement.appendChild(
      document.createTextNode(user.name ? `${user.name}, ${user.age} år` : user)
    );
    outputUsersList.appendChild(newListElement);
  });
};

// Kaller funksjoner for å oppdatere listen og grensesnittet
const handleSearch = (searchString) => {
  result = searchUserList(users, searchString);
  buttonFilter.disabled = false;
  showSearchResults(result);
};

const handleFilter = (minAge) => {
  if (isNaN(minAge)) {
    inputMinAge.value = "";
  } else {
    // Hvis bruker ønsker å filtrere søket på nytt, men med en lavere alder,
    // må vi kalle searchUserList for å få de brukerne som evt. hadde for lav
    // alder for den siste filtreringen
    result = filterUserList(
      minAge < lastMin ? searchUserList(users, inputName.value) : result,
      minAge
    );
    lastMin = minAge;
    buttonFilter.disabled = true;
    showSearchResults(result);
  }
};

const searchUserList = (users, searchString) =>
  users.filter((user) => user.name.toLowerCase().startsWith(searchString));

const filterUserList = (users, minAge) =>
  users.filter((user) => user.age >= minAge);

showSearchResults(result);
