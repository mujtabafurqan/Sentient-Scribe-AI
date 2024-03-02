'use client';

import { useEffect, useState, useRef } from 'react';
import Hls from 'hls.js';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import TranscriptComponent from '@/components/transcripts'

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [timestamp, setTimestamp] = useState(0);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.controls = true;
    const defaultOptions = {};
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src;
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers

      const hls = new Hls();
      hls.loadSource(src);
      const player = new Plyr(video, defaultOptions);
      hls.attachMedia(video);
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
      );
    }
    const handleTimeUpdate = () => {
        // console.log(`Current Time: ${video.currentTime}`); // Log the current timestamp
        // You can also perform other actions based on the current time here
        setTimestamp(video.currentTime);
      };
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [src, videoRef]);

  return (
    <>
    <div style={{display: 'flex', alignItems: 'start', gap: '20px'}}>
        <div style={{flex: '2'}}>
            <video data-displaymaxtap ref={videoRef} style={{width: '100%', height: 'auto'}} />
            <style jsx>{`
                video {
                max-width: 100%;
                }
            `}</style>
        </div>
        <div style={{flex: '1', overflowY: "auto",height:"70vh", }}>
            <TranscriptComponent timestamp={timestamp}/>
        </div>
    </div>
    </>
  );
}
