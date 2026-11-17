let cart = [];

const orderButtons = document.querySelectorAll(".order-btn");
const cartCount = document.getElementById("cart-count");

orderButtons.forEach(button => {
    button.addEventListener("click", function () {
        const name = this.dataset.name;
        const price = Number(this.dataset.price);

        cart.push({ name, price });

        cartCount.textContent = cart.length;

        alert(name + " added to cart!");
    });
});