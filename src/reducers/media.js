const media = (state = {}, action) => {
  switch (action.type) {
    case 'PLAY':
      return {
        ...state,
        playing: true,
      };
    case 'PAUSE':
      return {
        ...state,
        playing: false,
      };
    case 'DURATION':
      return {
        ...state,
        duration: action.duration,
      };
    case 'CURRENT_TIME':
      return {
        ...state,
        currentTime: action.time,
      };
    default:
      return state;
  }
};

export default media;
