import Counter from './counter.js';
import Shirts from './shirts.js';

const s = new Shirts();


// const d = document;

// const shirts = document.querySelectorAll('.shirt-item');
// const overlay = document.getElementById('overlay');
// const title = d.getElementById('overlay-title');
// const sizes = d.getElementById('overlay-sizes');

// [].slice.call(shirts).forEach((shirt) => {
//   shirt.addEventListener('click', shirtClickHandler.bind(shirt));
// });

// let opts = {
//   selector: null,
//   end: null,
//   start: 0,
//   duration: 2000
// }

// function shirtClickHandler() {
//   let self = this;

//   if (!self.classList.contains('is-active')) {

//   title.textContent = self.alt;
//   sizes.appendChild(setSizes(self.dataset.sizes));

//   [].slice.call(sizes.querySelectorAll('span')).forEach((item) => {
//     opts.selector = item;
//     opts.end = parseInt(item.textContent);

//     let a = new Counter(opts);
//     setTimeout(()=> { a.run(); }, 700)
//   });


//   overlay.style.backgroundColor = self.dataset.color;
//   overlay.classList.add('is-active');

//   let origin = [];
//   origin[0] = (-1 * (((window.innerWidth - 600)/2) - self.getBoundingClientRect().left + 10)) + 'px';

//   if (window.innerWidth < 960) {
//     document.body.classList.add('is-active');
//     origin[1] = ((self.getBoundingClientRect().top - 225) * 4) + 'px';
//     document.ontouchmove = function(e) {e.preventDefault()}
//   } else {
//     origin[1] = (self.getBoundingClientRect().top - 225) + 'px';
//   }

//   self.style.transformOrigin = origin.join(' ');
//   self.style.webkitTransformOrigin = origin.join(' ');
//   self.classList.add('is-active');
//   }
// }

// function setSizes(s) {
//   const holder = d.createDocumentFragment();

//   s.split(' ').forEach((item) => {
//     item = item.split('');

//     let span = d.createElement('span');
//     span.textContent = item[0];

//     let text = d.createTextNode(item[1]);

//     holder.appendChild(span);
//     holder.appendChild(text);
//   });

//   return holder;
// }

// d.getElementById('overlay-back').addEventListener('click', function() {
//   [].slice.call(d.querySelectorAll('.is-active')).forEach(function(item) {
//     item.classList.remove('is-active');
//     sizes.innerHTML = '';
//     document.ontouchmove = function(e) {return true;}
//   });
// });
