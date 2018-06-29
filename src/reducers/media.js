const media = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY':
      return {
        // startTime: action.startTime,
        playing: true,
        // completed: false,
      };
    case 'PAUSE':
      return {
        playing: false,
      };
    default:
      return state;
  }
};

export default media;
