window.addEventListener('DOMContentLoaded', (event) => {
  const obs = new IntersectionObserver((items) => {
    items.filter(entry => entry.isIntersecting).forEach(({target}) => {
      target.classList.add('dropped');
    })}, {threshold: .5}
  );

  document.querySelectorAll('.drop-in').forEach(el => obs.observe(el))

});

