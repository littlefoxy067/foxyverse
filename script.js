document.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.nav-button');
  const footerButton = document.querySelector('.footer-button');

  [navButton, footerButton].forEach((button) => {
    if (!button) return;

    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.01)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
    });
  });
});
