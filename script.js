// PRODUCT FILTER
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.export-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        products.forEach(p => {
            p.style.display =
                filter === 'all' || p.dataset.category === filter
                ? 'block' : 'none';
        });
    });
});

// QUOTE MODAL
const modal = document.getElementById('quoteModal');
const productText = document.getElementById('selectedProduct');

document.querySelectorAll('.quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        productText.textContent = `Product: ${btn.dataset.product}`;
    });
});

document.querySelector('.close-modal').onclick = () => {
    modal.style.display = 'none';
};
