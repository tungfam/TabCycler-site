const cards = Array.from(document.querySelectorAll('.tab-card'));
for (const card of cards) {
  card.addEventListener('click', () => {
    for (const item of cards) item.setAttribute('aria-pressed', String(item === card));
    document.querySelector('#selected-title').textContent = card.dataset.title;
    document.querySelector('#selected-domain').textContent = card.dataset.domain;
  });
}
