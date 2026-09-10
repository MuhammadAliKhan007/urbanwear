// ViewContent event
if (window.location.pathname.endsWith("product.html")) {

    fbq('track', 'ViewContent', {
        content_name: 'Black Oversized T-Shirt',
        content_ids: ['urbanwear-black-tshirt'],
        content_type: 'product',
        value: 29.00,
        currency: 'USD'
    });

}

const addToCartButton = document.getElementById("add-to-cart");

if (addToCartButton) {

    addToCartButton.addEventListener("click", function () {

        const product = {
            name: "Black Oversized T-Shirt",
            price: 29,
            quantity: 1
        };

        localStorage.setItem(
            "cart",
            JSON.stringify(product)
        );

        fbq('track', 'AddToCart', {
    content_name: 'Black Oversized T-Shirt',
    content_ids: ['urbanwear-black-tshirt'],
    content_type: 'product',
    value: 29.00,
    currency: 'USD'
});

        window.location.href = "cart.html";

    });

}

const cartContainer = document.getElementById("cart-container");

if (cartContainer) {

    const savedProduct = localStorage.getItem("cart");

    if (savedProduct) {

        const product = JSON.parse(savedProduct);

        cartContainer.innerHTML = `
            <div class="cart-item">

                <h3>${product.name}</h3>

                <p>Price: $${product.price}</p>

                <p>Quantity: ${product.quantity}</p>

            </div>
        `;

    } else {

        cartContainer.innerHTML = `
            <p>Your cart is empty.</p>
        `;

    }

}

const checkoutProduct = document.getElementById("checkout-product");

if (checkoutProduct) {

    const savedProduct = localStorage.getItem("cart");

    if (savedProduct) {

        const product = JSON.parse(savedProduct);

        checkoutProduct.innerHTML = `
            <div class="checkout-item">

                <h4>${product.name}</h4>

                <p>Quantity: ${product.quantity}</p>

                <p>Price: $${product.price}</p>

                <strong>
                    Total: $${product.price * product.quantity}
                </strong>

            </div>
        `;

    } else {

        checkoutProduct.innerHTML = `
            <p>Your cart is empty.</p>
        `;

    }
}

const checkoutButton = document.getElementById("checkout-button");

if (checkoutButton) {

    checkoutButton.addEventListener("click", function() {

        fbq('track', 'InitiateCheckout', {
            content_ids: ['urbanwear-black-tshirt'],
            content_type: 'product',
            value: 29.00,
            currency: 'USD'
        });

    });

}


const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function(event) {

        event.preventDefault();

        window.location.href = "thank-you.html";

    });

}