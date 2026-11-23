let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    let searchValue = searchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a product name");
    }
    else {
        alert("Searching for: " + searchValue);
    }

});

// Enter button se bhi search
searchInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});


// ================= WISHLIST =================

let wishlistBtn = document.getElementById("wishlistBtn");

wishlistBtn.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Your Wishlist is empty!");

});


// ================= CART =================

let cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Your Cart is empty!");

});


// ================= LOGIN =================

let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    let mobile = prompt("Enter your mobile number");

    if (mobile === null) {
        return;
    }

    if (mobile.trim() === "") {
        alert("Please enter your mobile number");
    }
    else if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10 digit mobile number");
    }
    else {
        alert("Demo OTP sent to " + mobile);
    }

});