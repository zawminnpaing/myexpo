// =============================
// SCROLL REVEAL ANIMATION
// =============================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // Optional: Remove class to animate "out" when scrolling back up
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// =============================
// MODAL & EMAIL LOGIC
// =============================
const modal = document.getElementById('quoteModal');
const productText = document.getElementById('selectedProduct');
const closeModalBtn = document.getElementById('closeModal');
const submitBtn = document.getElementById('submitRequest');

// Open Modal
document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        productText.textContent = `Target Product: ${btn.dataset.product}`;
    });
});

// Close Modal
closeModalBtn.onclick = () => modal.style.display = 'none';

window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
};

// Handle Form Submission
submitBtn.addEventListener('click', () => {
    const name = document.getElementById('buyerName').value;
    const email = document.getElementById('buyerEmail').value;
    const phone = document.getElementById('buyerPhone').value;
    const specs = document.getElementById('buyerSpecs').value;
    const product = productText.textContent;

    if(!name || !email) {
        alert("Please provide your name and email.");
        return;
    }

    const subject = encodeURIComponent(`Quotation Request: ${product}`);
    const body = encodeURIComponent(
        `Dear MyExpoBiz,\n\n` +
        `I am interested in requesting a quotation for the following:\n\n` +
        `${product}\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Details: ${specs}\n\n` +
        `Please reply to: ${email}`
    );

    window.location.href = `mailto:zawminn.p@gmail.com?subject=${subject}&body=${body}`;
    modal.style.display = 'none';
});
