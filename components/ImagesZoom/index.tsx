import { FC, useState } from 'react';
import { Image } from 'type';
import Slick from 'react-slick';
import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  images: Image[];
  onClose: () => void;
}
const ImagesZoom: FC<Props> = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <ImagesZoomWrapper>
      <Global />
      <header>
        <h1>상세이미지</h1>
        <button onClick={onClose}>X</button>
      </header>
      <div className="image-slider">
        <Slick
          initialSlide={0}
          afterChange={(slide) => setCurrentSlide(slide)}
          infinite
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {images.map((image) => (
            <div key={image.src} className="image-wrapper">
              <img src={image.src} alt={image.src} />
            </div>
          ))}
        </Slick>
      </div>
    </ImagesZoomWrapper>
  );
};

export default ImagesZoom;

const ImagesZoomWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  header {
    position: relative;
    text-align: center;
    height: 44px;
    padding: 0 20px;
    h1 {
      margin: 0;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      outline: none;
      border: none;
      background: #fff;
      width: 44px;
      height: 44px;
    }
  }
  .image-slider {
    display: flex;
    align-items: center;
    background-color: #313131;
    height: 100%;
    .image-wrapper {
      display: inline-block;
      height: 100%;
      text-align: center;
      img {
        margin: 0 auto;
        max-height: 750px;
      }
    }
  }
`;

const Global = createGlobalStyle`
  .slick-slider {
    width: 100%;
  }
  .slick-slide {
    display: inline-block;
  }
`;
