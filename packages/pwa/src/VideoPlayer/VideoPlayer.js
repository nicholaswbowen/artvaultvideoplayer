import './VideoPlayer.scss';
import { Player } from 'video-react';

function VideoPlayer({videoRef, src}) {
  return (
    <div>
      <Player
        ref={videoRef}
        muted={true}
        playsInline
      >
          <source src={src}/>
      </Player>
    </div>
  );
}

export default VideoPlayer;
