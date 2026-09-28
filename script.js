 function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const btn = document.getElementById("btn-theme");
    if (body.classList.containst("dark-mode")) {
        btn.innerHTML = "☀️Light Mode";
    } else {
        btn.innerHTML = "🌙Dark mode";
    }
 }