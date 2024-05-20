(function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    var items = document.querySelectorAll('.navbar-item');
    
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
	  
	  items.forEach(function(item) {
        item.classList.toggle('has-background-light');
	  });
	  
	  
    });
})();