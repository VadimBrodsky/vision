export const play = () => ({
  type: 'PLAY',
});

export const pause = () => ({
  type: 'PAUSE',
});

export const duration = (seconds) => ({
  type: 'DURATION',
  duration: seconds,
});

export const currentTime = (time) => ({
  type: 'CURRENT_TIME',
  time,
});
