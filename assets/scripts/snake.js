var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(function (item) {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = "".concat(el.offsetWidth, "px");
  indicator.style.left = "".concat(el.offsetLeft, "px");
  indicator.style.opacity = "1" ;
  el.classList.add('is-active');
}

items.forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    handleIndicator(e.target);
  });
  item.classList.contains('is-active') && handleIndicator(item);
});
     