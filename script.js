// JavaScript for the store functionality

document.addEventListener('DOMContentLoaded', function() {
    const shopLink = document.querySelector('nav .menu ul li:nth-child(2) a'); // Selects the "Shop" link
    const shopSection = document.querySelector('.shop-section'); // Selects the shop section

    shopLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents default link behavior

        // Hide all sections except the shop section
        document.querySelectorAll('main .section').forEach(section => {
            section.style.display = 'none';
        });
        shopSection.style.display = 'block'; // Display the shop section
    });

    // Example of adding to cart functionality (simplified)
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            
            // For demonstration, just log the product details
            console.log(`Added to cart: ${productName} - $${productPrice}`);
            alert(`Added to cart: ${productName} - $${productPrice}`);
        });
    });
});
