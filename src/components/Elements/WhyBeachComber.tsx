'use client';
import React, { useEffect, useRef, useState } from 'react';

// Declare the type for the YouTube player instance
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const WhyBeachComber: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load YouTube IFrame Player API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    // Create a new YouTube player once the API script has loaded
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-iframe', {
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    // Intersection Observer to pause video when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && playerRef.current && isPlaying) {
            playerRef.current.pauseVideo();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, [isPlaying]);

  const onPlayerReady = () => {
    // Player is ready to use
  };

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="container mx-auto rounded shadow relative h-[80vh] w-full flex items-center justify-center">
      <iframe
        ref={iframeRef}
        id="youtube-iframe"
        className={`rounded shadow absolute top-0 left-0 w-full h-full object-cover z-0 transition-all duration-500 ${isPlaying ? 'z-20' : 'z-0'}`}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/63mcYPxb2Jk?enablejsapi=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
       <div className={`rounded shadow absolute top-0 left-0 w-full h-full bg-black transition-all duration-500 ${isPlaying ? 'opacity-0' : 'opacity-70'} z-10`}></div>
      <div className={`rounded shadow absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent transition-all duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'} z-10`}></div>
      <div className={`rounded shadow absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent transition-all duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'} z-10`}></div>
      <div
        className={`rounded shadow relative z-20 p-8 text-center text-white max-w-2xl transition-all duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        onClick={togglePlayPause}
      >
        <h2 className="text-4xl font-bold mb-4">Why Buy a Beachcomber?</h2>
        <p className="text-lg mb-8">
          Beachcomber Hot Tubs is a family-owned, Canadian manufacturer based in Surrey, BC,
          and has been handcrafting hot tubs of the finest quality, best value, and unparalleled
          comfort since 1978.
        </p>
      </div>
    </div>
  );
};

export default WhyBeachComber;
