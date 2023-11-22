import React, { useRef, useState } from 'react';
import Footer from './FooterLeft';
import FooterRight from './FooterRight';
import './Video.css';

export default function Video(props) {
    const { url, channel, description, song, likes, shares, messages } = props;
    const videoRef = useRef(null);
    const [volume, setVolume] = useState(1); // Initial volume level is 1 (maximum)

    const onVideoPress = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    const handleVolumeChange = (newVolume) => {
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    return (
        <div className="video">
            <video
                className="player"
                onClick={onVideoPress}
                muted
                ref={videoRef}
                loop
                src={url}
            ></video>
            <div className="volume-controls">
                <button className="volume-button" onClick={() => handleVolumeChange(0)}>
                    Volume Down
                </button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                />
                <button className="volume-button" onClick={() => handleVolumeChange(1)}>
                    Volume Up
                </button>
            </div>
            <div className="bottom-controls">
                <Footer channel={channel} description={description} song={song} />
                <FooterRight likes={likes} shares={shares} messages={messages} />
            </div>
        </div>
    );
}
