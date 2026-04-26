document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("topBtn");

    window.onscroll = function () {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});