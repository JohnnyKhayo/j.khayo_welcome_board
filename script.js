// Get the form and the page sections by their HTML IDs
const form = document.getElementById("userForm");
const greeting = document.getElementById("greeting");
const ageInMonths = document.getElementById("ageInMonths");
const accessMessage = document.getElementById("accessMessage");
const quotes = document.getElementById("quotes");

// Convert age in years to months
function getAgeInMonths(age) {
 return age * 12;
}

function showUserData(name, age) {
    greeting.textContent = `Hello, ${name}! Welcome back.`;
    ageInMonths.textContent = `${name}, you are ${getAgeInMonths(age)} months old.`;

    // Check if the user is 18 or older
    if (age >= 18) {
        accessMessage.textContent = "You can access adult content.";
     }  else {
        accessMessage.textContent = "You are too young for adult content.";
    }
    // Loop print the same quote 5 times
    quotes.innerHTML = "";
    const quote = "Show up today. Tomorrow gets easier.";
    for (let i = 1; i <= 5; i++) {
        const p = document.createElement("p");
        p.textContent = `${i}. ${quote}`;
        quotes.appendChild(p);
    }
}