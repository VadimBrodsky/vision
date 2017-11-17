export default class Media {
  constructor(videoTag) {
    this.media = videoTag;
  }

  play() {
    console.log('EVENT: Play');
    this.media.play();
  }

  pause() {
    console.log('EVENT: Pause');
    this.media.pause();
  }

  currentTime() {
    return this.media.currentTime;
  }

  seek(time) {
    console.log(`EVENT: Seek to ${time}`);
    this.media.currentTime = time;
  }

  duration() {
    return this.media.duration;
  }
}
