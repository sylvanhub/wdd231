const msToDays = 86400000;
const theDateToday = new Date();
const today = Date.now();
const lastVisitMessage = document.getElementById('lastVisitMessage');

// Retrieve the last visit from localStorage, if any
const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {
    lastVisitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisitDate = new Date(parseInt(lastVisit));

    // Calculate the number of days since the last visit
    let daysBetweenVisits = (today - lastVisitDate.getTime()) / msToDays;

    if (daysBetweenVisits < 1) {
        lastVisitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetweenVisits === 1) {
        lastVisitMessage.textContent = "You last visited 1 day ago.";
    } else {
        lastVisitMessage.textContent = `You last visited ${Math.floor(daysBetweenVisits)} days ago.`;
    }
}

// Store the current visit date
localStorage.setItem('lastVisit', today.toString());
