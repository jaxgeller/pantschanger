import Counter from './counter';

export default class Shirts {
  constructor() {
    this.overlay  = document.getElementById('overlay');
    this.title    = document.getElementById('overlay-title');
    this.sizes    = document.getElementById('overlay-sizes');
    this.shirts   = document.querySelectorAll('.shirt-item');

    this._addShirtClickHandler();
  }

  // Click Handlers
  _addShirtClickHandler() {
    Array.prototype.slice.call(this.shirts).forEach(shirt => {
      shirt.addEventListener('click', this._shirtClickHandler.bind(shirt));
    });
  }
  _shirtClickHandler() {
    console.log(this)
  }

  // Set overlay sizes
  _setSizes(s) {
    const holder = d.createDocumentFragment();

    s.split(' ').forEach((item) => {
      item = item.split('');

      let span = d.createElement('span');
      span.textContent = item[0];

      let text = d.createTextNode(item[1]);

      holder.appendChild(span);
      holder.appendChild(text);
    });

    return holder;
  }
}
