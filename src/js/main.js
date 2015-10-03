const d = document;

const shirts = d.querySelectorAll('.shirt-item');
const overlay = d.getElementById('overlay');
const title = d.getElementById('overlay-title');
const sizes = d.getElementById('overlay-sizes');

[].slice.call(shirts).forEach((shirt) => {
  shirt.addEventListener('click', shirtClickHandler.bind(shirt));
});

let opts = {
  selector: null,
  end: null,
  start: 0,
  duration: 2000
}

function shirtClickHandler() {
  let self = this;

  if (!self.classList.contains('is-active')) {

  title.textContent = self.alt;
  sizes.appendChild(setSizes(self.dataset.sizes));

  [].slice.call(sizes.querySelectorAll('span')).forEach((item) => {
    opts.selector = item;
    opts.end = parseInt(item.textContent);

    let a = new Counter(opts);
    setTimeout(()=> { a.run(); }, 700)
  });


  overlay.style.backgroundColor = self.dataset.color;
  overlay.classList.add('is-active');

  // self.style.transformOrigin = self.dataset.direction;
  self.classList.add('is-active');

  if (window.innerWidth < 960) {

  }
  //   setTimeout(function() {
  //     var start = window.pageYOffset;
  //     var pos = this.getBoundingClientRect().top + window.pageYOffset - (this.getBoundingClientRect().height/2) ;
  //         pos = pos - 50;
  //     var timeStart = null;
  //     var timeElapsed = null;

  //     function scroll(currTime) {
  //       if (!timeStart) timeStart = currTime;
  //       timeElapsed = currTime - timeStart;

  //       let next = Math.round(ease(timeElapsed, start, pos - start, 1000));

  //       window.scrollTo(0, next);
  //       if (next < pos)
  //         requestAnimationFrame(scroll)
  //     }

  //     requestAnimationFrame(scroll);
  //   }.bind(this), 500);

  //   setTimeout(function() {
  //     cancelAnimationFrame(scroll);
  //   }, 2000);
  // }
  }
}

function setSizes(s) {
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

d.getElementById('overlay-back').addEventListener('click', function() {
  [].slice.call(d.querySelectorAll('.is-active')).forEach(function(item) {
    item.classList.remove('is-active');
    sizes.innerHTML = '';
  });
});

class Counter {

  constructor(opts) {
    this.start = opts.start;
    this.end = opts.end;
    this.duration = opts.duration;
    this.selector = opts.selector;
  }

  tick(currentTime) {
    if(!this.timeStart) this.timeStart = currentTime;
    this.timeElapsed = currentTime - this.timeStart;

    this.next = this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration);
    this.next = Math.round(this.next);

    this.selector.textContent = this.next;

    if (this.next < this.end)
      requestAnimationFrame((time)=> this.tick(time))
  }

  run() {
    requestAnimationFrame(this.tick.bind(this));
  }

  // t: current time, b: begInnIng value, c: change In value, d: duration
  ease(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  }
}


function ease(t, b, c, d) {
  return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
}
