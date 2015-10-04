import Counter from './counter';

const breakpoint = 960;
const maxwidth = 600;
const margin = 10;
const mobileMargin = 20;
const sizeDelay = 700;

function iter(selector) {
  return Array.prototype.slice.call(selector);
}

export default class Shirts {
  constructor() {
    this.overlay = document.getElementById('overlay');
    this.title = document.getElementById('overlay-title');
    this.sizes = document.getElementById('overlay-sizes');
    this.shirts = document.querySelectorAll('.shirt-item');

    // Set Shirt Click Handler
    iter(this.shirts).forEach(shirt => {
      shirt.addEventListener('click', this.shirtClickHandler.bind(this), false);
    });

    // Set Back Click Handler
    document.getElementById('overlay-back').addEventListener('click', this._reset.bind(this));

    // Set Escape Key Handler
    document.onkeyup = function(e) {
      const key = e.keyCode || e.which;
      if (key === 27) {
        this._reset();
      }
    }.bind(this);
  }

  shirtClickHandler(e) {
    const el = e.target;
    this._setOverlay(el);
    this._setOrigin(el);

    el.classList.add('is-active');
  }

  _setOrigin(el) {
    const width = window.innerWidth;
    const rect = el.getBoundingClientRect();

    let origin = [];

    if (width < breakpoint) {
      origin[0] = (-1 * (((width - maxwidth) / 2) - rect.left + mobileMargin)) + 'px';
      origin[1] = ((rect.top - 225) * 4) + 'px';
      document.ontouchmove = function(e) {e.preventDefault();};
    } else {
      origin[0] = (-1 * (((width - maxwidth) / 2) - rect.left + margin)) + 'px';
      origin[1] = (rect.top - 225) + 'px';
    }

    origin = origin.join(' ');

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
      const c = new Counter({ selector: item, end: parseInt(item.textContent, 10) });
      setTimeout(() => { c.run(); }, sizeDelay);
    });
  }
  _setSizes(s) {
    const holder = document.createDocumentFragment();

    s.split(' ').forEach(item => {
      const i = item.split('');

      const span = document.createElement('span');
      span.textContent = i[0];

      const text = document.createTextNode(i[1]);

      holder.appendChild(span);
      holder.appendChild(text);
    });

    return holder;
  }

  _reset() {
    const active = document.querySelectorAll('.is-active');
    const sizes = this.sizes;

    iter(active).forEach(item => {
      item.classList.remove('is-active');
      sizes.innerHTML = '';
      document.ontouchmove = function() {return true;};
    });
  }
}
