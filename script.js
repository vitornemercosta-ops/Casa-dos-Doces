document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const secao = document.getElementById(targetId);
    if (secao) {
      secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});