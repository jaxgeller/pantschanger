const shirts = document.querySelectorAll('.shirt-item');
const overlay = document.getElementById('overlay');
const title = document.getElementById('overlay-title');
const sizes = document.getElementById('overlay-sizes');

[].slice.call(shirts).forEach((shirt) => {
  shirt.addEventListener('click', shirtClickHandler.bind(shirt));
});

function shirtClickHandler() {
  overlay.style.backgroundColor = this.dataset.color;
  title.textContent = this.alt;
  overlay.classList.add('is-active');

  this.style.transformOrigin = this.dataset.direction;
  this.classList.add('is-active');
}


document.getElementById('overlay-back').addEventListener('click', function() {
  [].slice.call(document.querySelectorAll('.is-active')).forEach(function(item) {
    item.classList.remove('is-active');
  });
});
