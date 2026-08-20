'use client';

import { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface LazyYoutubeEmbedProps {
  videoId: string;
  thumbnailSrc: string;
  thumbnailLabel: string;
  aspectRatio?: string;
}

export function LazyYoutubeEmbed({
  videoId,
  thumbnailSrc,
  thumbnailLabel,
  aspectRatio = '16/9',
}: LazyYoutubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', aspectRatio, overflow: 'hidden', borderRadius: '0.4rem' }}>
      {!isLoaded ? (
        <div
          onClick={() => setIsLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transition: 'transform 0.3s ease-out',
            }}
            className="lazy-youtube-image"
          >
            <ImagePlaceholder
              label={thumbnailLabel}
              aspectRatio={aspectRatio}
              src={thumbnailSrc}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Play button overlay */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '3px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '24px solid white',
                  borderTop: '15px solid transparent',
                  borderBottom: '15px solid transparent',
                  marginLeft: '6px',
                }}
              />
            </div>
          </div>

          {/* Gradient overlay for better contrast */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      )}

      <style jsx>{`
        .lazy-youtube-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
