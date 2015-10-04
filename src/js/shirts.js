import Counter from './counter';

function iter(selector) {
  return Array.prototype.slice.call(selector);
}

export default class Shirts {
  constructor() {
    this.overlay  = document.getElementById('overlay');
    this.title    = document.getElementById('overlay-title');
    this.sizes    = document.getElementById('overlay-sizes');
    this.shirts   = document.querySelectorAll('.shirt-item');

    // Set Shirt Click Handler
    iter(this.shirts).forEach(shirt => {
      shirt.addEventListener('click', this.shirtClickHandler.bind(this), false);
    });

    // Set Back Click Handler
    document.getElementById('overlay-back').addEventListener('click', this._reset.bind(this));

    // Set Escape Key Handler
    document.onkeyup = function(e){
      let key = e.keyCode || e.which;
      if (key === 27)
        this._reset();
    }.bind(this)
  }

  shirtClickHandler(e) {
    let el = e.target;
    this._setOverlay(el);
    this._setOrigin(el);

    el.classList.add('is-active');
  }

  _setOrigin(el) {
    let width = window.innerWidth;
    let rect = el.getBoundingClientRect();

    let origin = [];

    if (width < 960) {
      origin[0] = (-1 * (((width - 600)/2) - rect.left + 20)) + 'px';
      origin[1] = ((rect.top - 225) * 4) + 'px';
      document.ontouchmove = function(e) {e.preventDefault()}
    } else {
      origin[0] = (-1 * (((width - 600)/2) - rect.left + 10)) + 'px';
      origin[1] = (rect.top - 225) + 'px';
    }

    origin = origin.join(' ')

    el.style.transformOrigin = origin;
    el.style.webkitTransformOrigin = origin;
  }
  // Set overlay options
  _setOverlay(el) {
    this.title.textContent = el.alt;
    this.sizes.appendChild(this._setSizes(el.dataset.sizes));
    this.overlay.style.backgroundColor = el.dataset.color;
    this.overlay.classList.add('is-active');
    document.body.classList.add('is-active');

    iter(this.sizes.querySelectorAll('span')).forEach(item => {
      let c = new Counter({ selector: item, end: parseInt(item.textContent) });
      setTimeout(() => { c.run(); }, 700)
    });
  }
  _setSizes(s) {
    const holder = document.createDocumentFragment();

    s.split(' ').forEach((item) => {
      item = item.split('');

      let span = document.createElement('span');
      span.textContent = item[0];

      let text = document.createTextNode(item[1]);

      holder.appendChild(span);
      holder.appendChild(text);
    });

    return holder;
  }

  _reset() {
    let active = document.querySelectorAll('.is-active');
    let sizes = this.sizes;

    iter(active).forEach(item => {
      item.classList.remove('is-active');
      sizes.innerHTML = '';
      document.ontouchmove = function(e) {return true;}
    });
  }
}
