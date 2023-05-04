import Sound from "react-sound";
import { useState } from "react";

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
        url="../assets/music/music.mp3"
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
