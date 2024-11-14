const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let rpassword1 = document.getElementById("passwordOne")
let rpassword2 = document.getElementById("passwordTwo")
let addition=0;
document.getElementById("displayLength").textContent="Password length: "+ addition



function randomPassword(){
    randomPassword1()
    randomPassword2()
}

function randomPassword1() {
    let password1 = "";  // Initialize the empty string for the password
    for (let i = 0; i < addition; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];  // Use password1 instead of password
    }
    rpassword1.textContent = password1;  // Corrected rpassword1 instead of rpassword11
    return password1;
}

function randomPassword2() {
    let password2 = "";  // Initialize the empty string for the password
    
    for (let i = 0; i < addition; i++) {
        password2 += characters[Math.floor(Math.random() * characters.length)];  // Use password2 instead of password
    }
    
    rpassword2.textContent = password2;  // Corrected rpassword2 instead of rpassword12
    return password2;
}

function addOne() {
    if (addition <=15){
    addition += 1;
    document.getElementById("displayLength").textContent = "Password length: " + addition;
    }

}

function minusOne(){
    if (addition >0){
    addition -= 1;
    document.getElementById("displayLength").textContent = "Password length: " + addition;
}
}