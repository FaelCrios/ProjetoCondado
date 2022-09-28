import React, { useState, useRef, useEffect } from "react";


function usePlayerState($videoPlayer) {
  const [playerState, setPlayerState] = useState({
    playing: false,
  });

  useEffect(()=>{
    playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause()
  },[
    $videoPlayer,
    playerState.playing,
  ])

  function videoToggle() {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  }
  return { playerState, videoToggle };
}
const videoURL = "http://www.localhost:3000/LordOfTheRing.mp4";
export default function MusicPlayer() {
  const $videoPlayer = useRef(null);
  const { playerState, videoToggle } = usePlayerState($videoPlayer);

  return (
    <div className="videoWrapper">
      <video 
      ref={$videoPlayer} 
      src={videoURL} />
      <div className="Control">
        <button onClick={videoToggle}>
          {playerState.playing ? "Pause" : "Play"}
        </button>
        

        
      </div>
    </div>
  );
}
