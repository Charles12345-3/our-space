
const audio = document.getElementById("bg-audio");

    window.addEventListener("click", () => {
        audio.play();
    });

const loginForm = document.getElementById('loginForm');
const bgAudio = document.getElementById('bg-audio');


function startMusic() {
    bgAudio.play()
        .then(() => {
            console.log("Music started!");
            
            document.removeEventListener('click', startMusic);
            document.removeEventListener('keydown', startMusic);
        })
        .catch(error => console.log("Waiting for user interaction..."));
}


document.addEventListener('click', startMusic);
document.addEventListener('keydown', startMusic);

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // .trim() handles accidental spaces from copy-pasting
    const user = document.getElementById('Username').value.trim();
    const pass = document.getElementById('Password').value.trim();

    // User 1 & 2 go to the same place
    const isUser1 = (user === "cabbylovesbaby@gmail.com" && pass === "chichirivvychibi");
    const isUser2 = (user === "cabbycabbage.lopez@gmail.com" && pass === "ilovepotato");
    
    // User 3 goes to the special page
    const isUser3 = (user === "babypotato.lopez@gmail.com" && pass === "ilovecabbage");

    if (isUser1 || isUser2) {
        setTimeout(() => { window.location.href = "home_page.html"; }, 400);
    } else if (isUser3) {
        setTimeout(() => { window.location.href = "home_pageBaby.html"; }, 400);
    } else {
        alert("Incorrect Username or Password!");
        document.getElementById('Password').value = "";
    }
});
