import { PlusOutlined } from '@ant-design/icons';
import { FC, useCallback, useState } from 'react';
import { Image } from 'type';

interface Props {
  images: Image[];
}
const PostImages: FC<Props> = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState<boolean>();

  const onZoom = useCallback(() => {
    setShowImagesZoom((prevShowImagesZoom) => !prevShowImagesZoom);
  }, []);

  if (images.length === 1) {
    return (
      <img
        style={{ maxHeight: '60vh', objectFit: 'contain' }}
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
    );
  }

  if (images.length === 3) {
    return (
      <>
        <img
          style={{ width: '50%', display: 'inline-block' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          style={{
            width: '50%',
            display: 'inline-block',
            marginBottom: 'auto',
            verticalAlign: 'top',
          }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  }

  return (
    <>
      <img
        style={{ width: '50%', display: 'inline-block' }}
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
      <div
        style={{
          display: 'inline-block',
          width: '50%',
          textAlign: 'center',
        }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {`${images.length - 1}개의 사진 더보기`}
      </div>
    </>
  );
};

export default PostImages;
