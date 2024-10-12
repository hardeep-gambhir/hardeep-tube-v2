import React from 'react';
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

const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  width: 90%;
  max-width: 500px;
  margin: 60px auto 0; // Add top margin here
  column-gap: 20px; // Add space between columns
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

const PhotoPage: React.FC = () => {
  return (
    <>
      <CollageContainer>
        {collage.map((photo, index) => (
          <Photo key={index} src={photo.src} />
        ))}
      </CollageContainer>
    </>
  );
};

export default PhotoPage;