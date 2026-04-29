document.querySelectorAll('.hero-images img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.classList.toggle('zoomed');
    });
    img.addEventListener('mouseleave', () => {
        img.classList.remove('zoomed');
      });
  });
