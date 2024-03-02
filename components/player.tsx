'use client'
const VideoPlayer = ({ src, poster }: {src:any, poster:string}) => {
    return (
      <div className="video-container" style={{ maxWidth: '640px', margin: 'auto' }}>
        <video src={src} controls autoPlay loop poster={poster} style={{ width: '100%' }}>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
export default function Player({ src }: {src:any}) {
    return (
        <div>
          <h1>My Video Player</h1>
          <VideoPlayer
            src={src}
            poster="https://www.example.com/path-to-your-poster-image.jpg"
          />
        </div>
      );
}