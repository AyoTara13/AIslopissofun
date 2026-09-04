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

    skin.addEventListener("click", function() {

        const price = Number(skin.dataset.price);
        const newSkin = skin.dataset.skin;

        // Already owned?
        if (ownedSkins.includes(newSkin)) {

            // Just equip it
            cookie.src = newSkin;
            currentSkin = newSkin;

            saveGame();

            return;
        }

        // Not owned, so check price
        if (cookies >= price) {

            cookies -= price;

            ownedSkins.push(newSkin);

            cookie.src = newSkin;
            currentSkin = newSkin;

            counter.textContent = "Cookies: " + cookies;

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
