document.querySelectorAll('.accordion-question').forEach((item) => {
  item.addEventListener('click', () => {
    let accordionItem = item.closest('.accordion-item');
    if (accordionItem.classList.contains('show')) {
      accordionItem.classList.remove('show');
    } else accordionItem.classList.add('show');
  });
});
