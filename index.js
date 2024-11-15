const allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];
  
const lettersOnly = allCharacters.slice(0, 52); // Only letters (A-Z, a-z)
const lettersAndNumbers = allCharacters.slice(0, 62); // Letters and numbers (A-Z, a-z, 0-9)
  
let rpassword1 = document.getElementById("passwordOne");
let rpassword2 = document.getElementById("passwordTwo");
  
let addition = 0;
let includeNumbers = true; // Default state: include numbers
let includeSymbols = true; // Default state: include symbols
  
document.getElementById("displayLength").textContent = "Password length: " + addition;
  
function randomPassword() {
  randomPassword1();
  randomPassword2();
}
  
function getCharacterSet() {
  if (includeNumbers && includeSymbols) {
     return allCharacters; // All characters
  } else if (includeNumbers) {
    return lettersAndNumbers; // Letters and numbers
  } else if (includeSymbols) {
    return lettersOnly.concat(allCharacters.slice(62)); // Letters and symbols
  } else {
    return lettersOnly; // Letters only
  }
}
  
function randomPassword1() {
  let password1 = "";
  const characterSet = getCharacterSet();
  for (let i = 0; i < addition; i++) {
    password1 += characterSet[Math.floor(Math.random() * characterSet.length)];
  }
  rpassword1.textContent = password1;
   return password1;
}
  
function randomPassword2() {
  let password2 = "";
  const characterSet = getCharacterSet();
  for (let i = 0; i < addition; i++) {
    password2 += characterSet[Math.floor(Math.random() * characterSet.length)];
  }
  rpassword2.textContent = password2;
  return password2;
}
  
function addOne() {
  if (addition <= 15) {
    addition += 1;
    document.getElementById("displayLength").textContent = "Password length: " + addition;
  }
}
  
function minusOne() {
  if (addition > 0) {
  addition -= 1;
  document.getElementById("displayLength").textContent = "Password length: " + addition;
}
}
  
function copyPassword(id) {
  let button = document.getElementById(id);
  let textToCopy = button.textContent || button.innerText;
  navigator.clipboard.writeText(textToCopy)
    .then(() => alert('Text copied to clipboard'))
    .catch(err => alert('Something went wrong', err));
}
  
function toggleNumbers() {
  includeNumbers = !includeNumbers;
  document.getElementById("displayAll").textContent = `Include Numbers: ${includeNumbers}, Symbols: ${includeSymbols}`;
}
  
function toggleSymbols() {
  includeSymbols = !includeSymbols;
  document.getElementById("displayAll").textContent = `Include Numbers: ${includeNumbers}, Symbols: ${includeSymbols}`;
}
  