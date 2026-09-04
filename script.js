let cookies = Number(localStorage.getItem("cookies")) || 0;

let ownedSkins = JSON.parse(localStorage.getItem("ownedSkins")) || ["cookie.png"];

let currentSkin = localStorage.getItem("currentSkin") || "cookie.png";

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

const shopButton = document.getElementById("shopButton");
const shop = document.getElementById("shop");

const skins = document.querySelectorAll(".skin");

// Load saved data
cookie.src = currentSkin;
counter.textContent = "Cookies: " + cookies;


// Clicking the cookie
cookie.addEventListener("click", function() {
    cookies++;

    counter.textContent = "Cookies: " + cookies;

    saveGame();
});


// Open / close shop
shopButton.addEventListener("click", function() {
    if (shop.style.display === "none") {
        shop.style.display = "block";
    } else {
        shop.style.display = "none";
    }
});


// Buy / select skins
skins.forEach(function(skin) {

    const skinName = skin.dataset.skin;
    const price = Number(skin.dataset.price);

    // Show OWNED if already purchased
    if (ownedSkins.includes(skinName)) {
        skin.textContent = "OWNED";
    }

    skin.addEventListener("click", function() {

        // Already owned → equip it
        if (ownedSkins.includes(skinName)) {

            cookie.src = skinName;
            currentSkin = skinName;

            saveGame();

            return;
        }

        // Not owned → try to buy it
        if (cookies >= price) {

            cookies -= price;

            ownedSkins.push(skinName);

            cookie.src = skinName;
            currentSkin = skinName;

            counter.textContent = "Cookies: " + cookies;

            // Change button to OWNED
            skin.textContent = "OWNED";

            saveGame();

        } else {

            alert("You don't have enough cookies!");

        }
    });
});


// Save everything
function saveGame() {

    localStorage.setItem("cookies", cookies);

    localStorage.setItem(
        "ownedSkins",
        JSON.stringify(ownedSkins)
    );

    localStorage.setItem("currentSkin", currentSkin);
}
