const shirts = document.querySelectorAll('.shirt-item');
const overlay = document.getElementById('overlay');
const title = document.getElementById('overlay-title');
const sizes = document.getElementById('overlay-sizes');

[].slice.call(shirts).forEach((shirt) => {
  shirt.addEventListener('click', shirtClickHandler);
});

function shirtClickHandler() {
  document.body.classList.add('no-scroll');
  overlay.style.backgroundColor = this.dataset.color;
  title.textContent = this.alt;
  // sizes.appendChild(setSizes(this.dataset.sizes));
  overlay.classList.add('is-active');

  // this.style.transformOrigin = this.dataset.direction;
  // this.classList.add('is-active');
}
