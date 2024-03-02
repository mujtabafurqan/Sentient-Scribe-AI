'use client'
const VideoPlayer = ({ src, poster }) => {
    return (
      <div className="video-container" style={{ maxWidth: '640px', margin: 'auto' }}>
        <video src={src} controls autoPlay loop poster={poster} style={{ width: '100%' }}>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
export default function Player() {
    return (
        <div>
          <h1>My Video Player</h1>
          <VideoPlayer
            src="https://vod-cdn.lp-playback.studio/raw/jxf4iblf6wlsyor6526t4tcmtmqa/catalyst-vod-com/hls/aa49jf2uijrtct3e/index.m3u8"
            poster="https://www.example.com/path-to-your-poster-image.jpg"
          />
        </div>
      );
}