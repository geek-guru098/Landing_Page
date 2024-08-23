document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.link a').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetForm = document.querySelector(this.getAttribute('href'));
          const currentForm = this.closest('.form');
          currentForm.style.display = 'none';
          targetForm.style.display = 'block';
      });
  });
});
