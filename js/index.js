
function loadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) return;

  img.src = src; 
  img.onload = () => {
    img.classList.add('loaded');
  };
  observer.unobserve(img); 
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
    }
  });
});


const lazyImages = document.querySelectorAll('img.lazy');
lazyImages.forEach(img => observer.observe(img));


document.getElementById('loadAll').addEventListener('click', () => {
  lazyImages.forEach(img => loadImage(img));
});

