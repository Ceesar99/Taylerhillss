document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      // Demo: we do not swap content; in a real app you'd filter posts
    });
  });

  const subscribeButtons = Array.from(document.querySelectorAll('#subscribeBtn, .mobile-subscribe-bar .btn-primary'));
  subscribeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.textContent = 'Subscribed ✓';
      setTimeout(() => { btn.disabled = false; }, 1200);
    });
  });
});