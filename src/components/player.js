import React from 'react';

/*
 * The media events that react supports:
 * ====================================
 * onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
 * onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
 * onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
 * onTimeUpdate onVolumeChange onWaiting
*/

const Player = ({ id, liftState, mediaApi, children, playing }) => {
  const handleMetadata = e => {
    liftState({ duration: e.target.duration });
  };

  const handleTimeUpdate = e => {
    liftState({ position: e.target.currentTime.toFixed() });
  };

  const handleClick = () => {
    playing ? mediaApi.pause() : mediaApi.play();
    liftState({playing: !playing});
  }

  return (
    <video
      width="480"
      id={id}
      onLoadedMetadata={handleMetadata}
      onTimeUpdate={handleTimeUpdate}
      onClick={handleClick}
    >
      {children}
    </video>
  );
}

export default Player;
