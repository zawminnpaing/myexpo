// 1. SCROLL REVEAL (IN AND OUT ANIMATIONS)
const observerOptions = {
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // This triggers the "Out" animation when scrolling away
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => {
    revealObserver.observe(el);
});

// 2. MODAL LOGIC
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

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// 3. HANDLE SUBMIT (MAILTO)
submitBtn.addEventListener('click', () => {
    const name = document.getElementById('buyerName').value;
    const email = document.getElementById('buyerEmail').value;
    const phone = document.getElementById('buyerPhone').value;
    const specs = document.getElementById('buyerSpecs').value;
    const product = productText.textContent;

    if(!name || !email || !phone) {
        alert("Please provide your name, email, and phone number.");
        return;
    }

    const recipient = "zawminn.p@gmail.com";
    const subject = encodeURIComponent(`Quotation Request: ${product}`);
    const body = encodeURIComponent(
        `Dear MyExpoBiz Team,\n\n` +
        `I would like to request a quotation for:\n` +
        `${product}\n\n` +
        `--- Buyer Details ---\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Specifications: ${specs}\n\n` +
        `Regards.`
    );

    // Open user's mailbox
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Close modal
    modal.style.display = 'none';
});

// 4. MOBILE HAMBURGER (SIMPLE)
document.getElementById('hamburger').addEventListener('click', () => {
    alert("Menu feature coming soon! Please scroll to navigate.");
});
