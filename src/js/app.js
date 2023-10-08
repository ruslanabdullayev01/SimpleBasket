document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cartItemCount = localStorage.getItem("cartItemCount") || 0;
    cartCount.textContent = cartItemCount;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = button.getAttribute("data-product");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            cartItemCount++;
            cartCount.textContent = cartItemCount;

            localStorage.setItem("cartItemCount", cartItemCount);

            const cartItem = {
                name: productName,
                price: productPrice
            };
            localStorage.setItem(`cartItem${cartItemCount}`, JSON.stringify(cartItem));
        });
    });
});
