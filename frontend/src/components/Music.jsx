import Sound from "react-sound";
import { useState } from "react";
import music from "../helper/music.mp3";

function Music(
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div>
      <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? (
          <img
            src="../assets/icon/sound-off.svg"
            alt="Sound off"
            className="h-[30px]"
          />
        ) : (
          <img
            src="../assets/icon/sound-on.svg"
            alt="Sound on"
            className="h-[30px]"
          />
        )}
      </button>
      <Sound
        url={music}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        volume={40}
        loop
        onFinishedPlaying={handleSongFinishedPlaying}
        autoLoad
      />
    </div>
  );
}

export default Music;
