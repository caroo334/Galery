import styled from 'styled-components';

const StyledContainerOVerlay = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  animation-duration: 0.3s;
  animation-name: anim-open;

  @keyframes anim-open {
    0% {
      opacity: 0;
      transform: scale3d(1.1, 1.1, 1);
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }
`;

const StyledArrowsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Styledbutton = styled.img`
  top: 25px;
  right: 25px;
  position: absolute;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledArrow = styled.img`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

type StyledImageProps = {
  selected: boolean;
};

const StyledImage = styled.img<StyledImageProps>`
  width: 120px;
  height: 80px;
  object-fit: cover;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  border: ${({ selected }) => (selected ? '5px solid #20C3D4' : 'none')};
`;

const StyledMainImage = styled.img`
  width: 770px;
  height: 550px;
  object-fit: cover;
`;

const StyledImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const StyledGalleryContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

type GalleryProps = {
  onClose: () => void;
  images: string[];
  selectedImage: number;
  onChangeImageSelected: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
};

export const Gallery = ({
  onClose,
  images,
  selectedImage,
  onChangeImageSelected,
  onPrev,
  onNext,
}: GalleryProps) => (
  <StyledContainerOVerlay>
    <Styledbutton onClick={onClose} src="/images/x.svg" />
    <StyledGalleryContainer>
      <StyledArrowsContainer>
        <StyledArrow onClick={onPrev} src="/images/arrow-left.svg" />
        <StyledMainImage src={images[selectedImage]} />
        <StyledArrow onClick={onNext} src="/images/arrow-right.svg" />
      </StyledArrowsContainer>
      <StyledImagesContainer>
        {images &&
          images.length > 0 &&
          images.map((img, index) => (
            <StyledImage
              key={`${img}-${index}`}
              src={img}
              selected={selectedImage === index}
              onClick={() => onChangeImageSelected(index)}
            />
          ))}
      </StyledImagesContainer>
    </StyledGalleryContainer>
  </StyledContainerOVerlay>
);
