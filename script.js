const clickSound = document.getElementById("clickSound");

cookie.addEventListener("click", function() {
    cookies++;
    counter.textContent = "Cookies: " + cookies;

    clickSound.currentTime = 0;
    clickSound.play();
});
