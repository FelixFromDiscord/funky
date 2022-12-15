const button = document.getElementById("scrollBtn");
const scrollTo = document.getElementById("scrollTo");
const switchTheme = document.getElementById("theme-switch");

var theme;

theme = localStorage.getItem('theme') ?? 'light';

if(theme == 'dark') {
    switchTheme.checked = true;
} else {
    switchTheme.checked = false;
}

switchTheme.addEventListener('click', () => {
    if(switchTheme.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

button.addEventListener("click", () => {
    scrollTo.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
});

