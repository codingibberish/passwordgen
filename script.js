let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", ".", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let passLength = 3;
let password = "";


function randomNum() {
    let rannum = Math.floor(Math.random() * 64) + 1;
    return rannum;
}


function getPassword() {

    password = "";
    for (i = 0; i < 5; i++) {
    password += digits[randomNum()]
    
}

return password;

}

function generate() {
    let pass1 = getPassword();
    let pass2 = getPassword();
    let pass3 = getPassword();
    let pass4 = getPassword();

    document.getElementById("right1").textContent = pass1;
    document.getElementById("right2").textContent = pass2;
    document.getElementById("left1").textContent = pass3;
    document.getElementById("left2").textContent = pass4;

}

function copy1() {

    let copyText = documet.getElementById("right1");
    navigator.clipboard.writeText(copyText.value)
}