// 1. NAV BAR ACTIVE STATE ON SCROLL
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
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

// 2. PRODUCT REVEAL ANIMATIONS (In and Out)
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

// 3. MODAL LOGIC
const modal = document.getElementById('quoteModal');
const selectedText = document.getElementById('selectedProduct');

document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'flex';
        selectedText.innerText = "Request for: " + btn.dataset.product;
    };
});

document.getElementById('closeModal').onclick = () => modal.style.display = 'none';

document.getElementById('submitRequest').onclick = () => {
    const name = document.getElementById('buyerName').value;
    const product = selectedText.innerText;
    window.location.href = `mailto:zawminn.p@gmail.com?subject=Quote Request&body=Name: ${name}%0A${product}`;
    modal.style.display = 'none';
};
