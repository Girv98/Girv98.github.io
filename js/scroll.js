
var items = document.querySelectorAll('.has-scroll');

items.forEach((item) => {
  item.style.visibility = 'visible';
})
  
ScrollReveal().reveal('.has-scroll', {
  delay: 100,
  distance: '200px',
  duration: 1000,
  origin: 'bottom',
});