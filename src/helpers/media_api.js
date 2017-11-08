export const play = (media) => {
  console.log('EVENT: Play');
  media.play();
};

export const pause = (media) => {
  console.log('EVENT: Pause');
  media.pause();
};

export const currentTime = (media, time) => {
  if (time !== undefined) {
    media.currentTime = time;
  }
  return media.currentTime;
};

export const duration = media => media.duration;
