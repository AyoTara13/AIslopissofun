let clicks = 0;

const coin = document.getElementById("coin");
const clicksText = document.getElementById("clicks");

coin.addEventListener("click", function() {
    clicks++;
    clicksText.textContent = clicks;
});
