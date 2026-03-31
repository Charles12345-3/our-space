function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
    
    
    console.log("Menu classes are now: " + menu.className);
}
function updateTime() {
    const now = new Date();

    // 1. Format the Date (e.g., Monday, March 29, 2026)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    
    // 2. Format the Time (e.g., 12:30:05 PM)
    const timeString = now.toLocaleTimeString('en-US');

    // 3. Push to HTML
    document.getElementById('real-date').innerText = dateString;
    document.getElementById('real-clock').innerText = timeString;
}

// Run the clock immediately, then every second
updateTime();
setInterval(updateTime, 1000);
function checkAnniversary() {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0 = Jan, 2 = March
    const currentDate = now.getDate();
    const currentYear = now.getFullYear();

    const titleElement = document.getElementById("anniversary-title");
    const displayElement = document.getElementById("countdown-display");

    // 1. CHECK IF IT IS MARCH 25
    if (currentMonth === 2 && currentDate === 25) {
        titleElement.innerHTML = "💖 HAPPY ANNIVERSARY BABY! 💖";
        displayElement.innerHTML = "Today is our special day! I love you so much!";
        displayElement.style.color = "#FF69B4"; // Make it pop in Hot Pink
    } 
    // 2. IF NOT, CALCULATE COUNTDOWN
    else {
        // Determine if the next March 25 is this year or next year
        let nextAnniversaryYear = currentYear;
        if (currentMonth > 2 || (currentMonth === 2 && currentDate > 25)) {
            nextAnniversaryYear = currentYear + 1;
        }

        const targetDate = new Date(`March 25, ${nextAnniversaryYear} 00:00:00`).getTime();
        const difference = targetDate - now.getTime();

        // Convert milliseconds to days
        const daysRemaining = Math.ceil(difference / (1000 * 60 * 60 * 24));

        titleElement.innerHTML = "Countdown to Our Anniversary";
        displayElement.innerHTML = `<span>${daysRemaining}</span> Days Left! 🏃‍♂️💨`;
    }
}

// Run it immediately
checkAnniversary();

// List all your checkbox IDs here
const checkboxes = ['date1', 'date2', 'date3', 'date4', 'date5', 'date6', 'date7', 'date8', 'date9',
     'date10', 'date11', 'date12'];

checkboxes.forEach(id => {
    const el = document.getElementById(id);
    
    // 1. Load the saved state from the browser's memory
    const isChecked = localStorage.getItem(id) === 'true';
    el.checked = isChecked;

    // 2. Save the state whenever she clicks it
    el.addEventListener('change', () => {
        localStorage.setItem(id, el.checked);
    });
});