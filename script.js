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
// QUOTE MODAL LOGIC
const modal = document.getElementById('quoteModal');
const productText = document.getElementById('selectedProduct');
const closeModalBtn = document.getElementById('closeModal');
const submitBtn = document.getElementById('submitRequest');

// Open Modal
document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        productText.textContent = `Product: ${btn.dataset.product}`;
    });
});

// Close Modal
closeModalBtn.onclick = () => {
    modal.style.display = 'none';
};

// Handle Submit (Mailto)
submitBtn.addEventListener('click', () => {
    const name = document.getElementById('buyerName').value;
    const email = document.getElementById('buyerEmail').value;
    const phone = document.getElementById('buyerPhone').value;
    const specs = document.getElementById('buyerSpecs').value;
    const product = productText.textContent;

    if(!name || !email) {
        alert("Please fill in at least your name and email.");
        return;
    }

    const subject = encodeURIComponent(`Quotation Request: ${product}`);
    const body = encodeURIComponent(
        `Hello MyExpoBiz,\n\nI would like to request a quote.\n\n` +
        `Product: ${product}\n` +
        `Customer Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Specifications: ${specs}`
    );

    // Trigger user's mail app
    window.location.href = `mailto:zawminn.p@gmail.com?subject=${subject}&body=${body}`;
    
    // Close modal after sending
    modal.style.display = 'none';
});

// Close on outside click
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
