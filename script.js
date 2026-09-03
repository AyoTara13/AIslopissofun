let cookies = 0;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

const shopButton = document.getElementById("shopButton");
const shop = document.getElementById("shop");

const skins = document.querySelectorAll(".skin");

// Clicking the cookie
cookie.addEventListener("click", function() {
    cookies++;
    counter.textContent = "Soco Cexes: " + cookies;
});

// Open/close shop
shopButton.addEventListener("click", function() {
    if (shop.style.display === "none") {
        shop.style.display = "block";
    } else {
        shop.style.display = "none";
    }
});

// Buy skins
skins.forEach(function(skin) {

    skin.addEventListener("click", function() {

        const price = Number(skin.dataset.price);
        const newSkin = skin.dataset.skin;

        if (cookies >= price) {

            cookies -= price;
            counter.textContent = "Soco Cexes: " + cookies;

            cookie.src = newSkin;

        } else {

            alert("You don't have enough cookies!");

        }

    });

});
