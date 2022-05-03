var indicator = document.querySelector('.nav-indicator');
var indicator2 = document.querySelector('.nav-indicator2');
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





function handleIndicator2(el) {
  items.forEach(function (item) {
    item.removeAttribute('style');
  });
  indicator2.style.width = "".concat(el.offsetWidth, "px");
  indicator2.style.left = "".concat(el.offsetLeft, "px");
  indicator2.style.opacity = "0.3" ;
};

items.forEach(function (item, index) {
  item.addEventListener('mouseenter', function (e) {
    handleIndicator2(e.target);
  });
    item.classList.contains('is-hover') && handleIndicator2(item);
});





items.forEach(function (item, index) {
  item.addEventListener('mouseleave', function (e) {
    handleIndicator3(e.target);
  });
});



function handleIndicator3(el) {
    items.forEach(function (item) {
    });
    indicator2.style.left = 50, "%";
    indicator2.style.opacity = "0";
};