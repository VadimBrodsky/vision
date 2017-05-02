const play = (media) => {
  console.log('EVENT: Play');
  media.play();
};

const pause = (media) => {
  console.log('EVENT: Pause');
  media.pause();
};

const currentTime = (media, time) => {
  if (time !== undefined) {
    media.currentTime = time;
  }
  return media.currentTime;
};

export {
  play,
  pause,
  currentTime,
};