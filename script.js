// 1. NAVIGATION HIGHLIGHTING & SCROLL LINKING
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href").includes(current)) {
            item.classList.add("active");
        }
    });
});

// 2. PRODUCT SLIDE-IN REVEAL
const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, revealOptions);

document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

// 3. MODAL FUNCTIONALITY
const modal = document.getElementById('quoteModal');
const selectedText = document.getElementById('selectedProduct');
const closeModalBtn = document.getElementById('closeModal');

document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        selectedText.innerText = "Product: " + btn.dataset.product;
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = 'none';
};

// 4. FORM SUBMISSION (MAILTO)
document.getElementById('submitRequest').addEventListener('click', () => {
    const name = document.getElementById('buyerName').value;
    const email = document.getElementById('buyerEmail').value;
    const phone = document.getElementById('buyerPhone').value;
    const specs = document.getElementById('buyerSpecs').value;
    const product = selectedText.innerText;

    if (!name || !email || !phone) {
        alert("Please fill in the required fields.");
        return;
    }

    const body = `Inquiry Details:%0A${product}%0A%0ABuyer: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ASpecs: ${specs}`;
    window.location.href = `mailto:zawminn.p@gmail.com?subject=Quotation Request&body=${body}`;
    modal.style.display = 'none';
});
