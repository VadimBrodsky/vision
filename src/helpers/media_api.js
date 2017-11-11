export const play = (media) => {
  console.log('EVENT: Play');
  media.play();
};

export const pause = (media) => {
  console.log('EVENT: Pause');
  media.pause();
};

export const currentTime = (media) => {
  return media.currentTime;
};

export const seek = (media, time) => {
  console.log(`EVENT: Seek to ${time}`);
  media.currentTime = time;
}

export const duration = media => media.duration;
