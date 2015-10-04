export default class Counter {

  constructor(opts) {
    this.duration = opts.duration || 2000;
    this.start = opts.start || 0;
    this.end = opts.end;
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

  ease(t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
  }
}
