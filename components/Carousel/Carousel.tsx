import { useState } from 'react';
import styled from 'styled-components';
import { Gallery } from './Gallery';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 78px;
  border-radius: 5px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

type CarouselProps = {
  images: string[];
};

export const Carousel = ({ images }: CarouselProps) => {
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [selectedImage, setSelectedimage] = useState<number>(0);

  const handleClose = () => {
    setShowGallery(false);
  };

  const handleChangeImageSelected = (index: number) => setSelectedimage(index);

  const handleNext = () => {
    if (selectedImage >= images.length - 1) setSelectedimage(0);
    else setSelectedimage((prevValue) => prevValue + 1);
  };

  const handlePrev = () => {
    if (selectedImage <= 0) setSelectedimage(images.length - 1);
    else setSelectedimage((prevValue) => prevValue - 1);
  };

  return (
    <>
      <StyledContainer>
        {images &&
          images.length > 0 &&
          images.map((img, index) => (
            <StyledImage
              key={`${img}-${index}`}
              onClick={() => {
                setSelectedimage(index);
                setShowGallery(true);
              }}
              src={img}
            />
          ))}
      </StyledContainer>
      {showGallery && (
        <Gallery
          onClose={handleClose}
          images={images}
          selectedImage={selectedImage}
          onChangeImageSelected={handleChangeImageSelected}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};
