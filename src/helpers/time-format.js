export default class TimeFormat {
  constructor(time) {
    const timeNumber = Number(time);
    this._minutes = timeNumber / 60;
    this._seconds = timeNumber % 60;
  }

  minutes() {
    return TimeFormat.padZero(this._minutes);
  }

  seconds() {
    return TimeFormat.padZero(this._seconds);
  }

  minuteSeconds() {
    return `${this.minutes()}:${this.seconds()}`
  }

  static padZero(num) {
    const prefix = num < 10 ? '0' : '';
    return `${prefix}${num.toFixed()}`;
  }
}
