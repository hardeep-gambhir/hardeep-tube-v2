import React, { useEffect } from 'react';
import styled from 'styled-components';
import { P, Blurb } from "@typography/styles";

interface IPhoto {
  src: string;
  alt?: string;
}

const Photo: React.FC<IPhoto> = ({ src, alt = 'Photo' }) => {
  return (
    <ImageItem>
      <img src={src} alt={alt} />
    </ImageItem>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  min-width: 0;
  max-width: 900px;
  @media (max-width: 1100px) { flex-direction: column; align-items: center; padding: 0; }
  margin: 0 auto;
`;

const InstagramContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 350px;
  min-width: 0;
  .instagram-media { min-width: 0 !important; width: 100% !important; max-width: 100% !important; }
  margin-top: 0;
`;

const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 400px) { grid-template-columns: minmax(0, 1fr); }
  gap: 0;
  width: 100%;
  max-width: 500px;
  margin-top: 0;
  column-gap: 20px;
`;

const ImageItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const collage = [
  { src: "/photos/big-sit.jpeg" },
  { src: "/photos/bike-margaret.jpeg" },
  { src: "/photos/cinematic-hardeep.png" },
  { src: "/photos/my-loves.jpg" },
  { src: "/photos/yestheory1.jpeg" },
  // Add more photos as needed
];

declare global {
  interface Window {
    instgrm: any;
  }
}

const PhotoPage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PageContainer>
      <InstagramContainer>
        <blockquote 
          className="instagram-media" 
          data-instgrm-permalink="https://www.instagram.com/reel/C5H5rJ6rJ54/"
          data-instgrm-version="14"
        >
        </blockquote>
      </InstagramContainer>
      <CollageContainer>
        {collage.map((photo, index) => (
          <Photo key={index} src={photo.src} />
        ))}
      </CollageContainer>
    </PageContainer>
  );
};

export default PhotoPage;