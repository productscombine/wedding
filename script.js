// Countdown Timer logic
const countdownDate = new Date("Jun 6, 2026 17:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display values safely
    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");

    if (elDays) elDays.innerHTML = days < 10 ? "0" + days : days;
    if (elHours) elHours.innerHTML = hours < 10 ? "0" + hours : hours;
    if (elMinutes) elMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    if (elSeconds) elSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If countdown is over
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<span>Свадьба началась!</span>";
    }
}, 1000);

// Reveal Animation on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
// Trigger once on load to show initial elements
document.addEventListener("DOMContentLoaded", reveal);
