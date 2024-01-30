document.addEventListener("DOMContentLoaded", function() {
    const modoToggle = document.getElementById("modoToggle");

    modoToggle.addEventListener("click", function() {
        document.body.classList.toggle("modo-oscuro");
        updateButtonIcon();
    });

    function updateButtonIcon() {
        const isModoOscuro = document.body.classList.contains("modo-oscuro");
        modoToggle.textContent = isModoOscuro ? "☀️" : "🌙";
    }
});