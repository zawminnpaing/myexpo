// =============================
// MOBILE NAVIGATION
// =============================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// =============================
// PRODUCT FILTER
// =============================
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.export-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        
        products.forEach(p => {
            if (filter === 'all' || p.dataset.category === filter) {
                p.style.display = 'flex'; // Use flex to maintain card layout properties
            } else {
                p.style.display = 'none';
            }
        });
    });
});

// =============================
// QUOTE MODAL
// =============================
const modal = document.getElementById('quoteModal');
const productText = document.getElementById('selectedProduct');
const closeModalBtn = document.getElementById('closeModal');

// Open Modal
document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        productText.textContent = `Product: ${btn.dataset.product}`;
    });
});

// Close Modal (Button Click)
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Close Modal (Clicking Outside)
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
