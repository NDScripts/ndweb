// JavaScript (optional)
// This script handles the navigation and shows/hides the shop section when clicking "Shop"

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
