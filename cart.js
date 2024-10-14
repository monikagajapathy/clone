// Function to add items to the cart and show a notification
function addToCart(productName, price) {
    // Get existing cart from localStorage, or create a new one if it doesn't exist
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push({ productName, price });

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show a notification that the product has been added
    showNotification(`${productName} has been added to your cart!`);

    // Redirect to the cart page after a short delay (optional)
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1500); // 1.5 seconds delay
}

// Function to load and display the cart items on the cart page
function loadCart() {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Get the cart items container
    let cartItems = document.querySelector('.cart-items');
    let totalPrice = 0;

    // If the cart is empty
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Display each item in the cart
        cart.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<p>${item.productName} - ₹${item.price}</p>`;
            cartItems.appendChild(cartItem);
            totalPrice += item.price;
        });
    }

    // Update the total price
    document.getElementById('total-price').textContent = totalPrice;
}

// Function to show a notification
function showNotification(message) {
    // Create a notification div
    let notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Append the notification to the body
    document.body.appendChild(notification);

    // Remove the notification after 2.5 seconds
    setTimeout(() => {
        notification.remove();
    }, 2500);
}

// Load the cart when the cart page is opened
if (window.location.pathname.includes('cart.html')) {
    window.onload = loadCart;
}
