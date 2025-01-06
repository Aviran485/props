import React from 'react';

const ImageWithCaption = ({ src, caption }) => {
  return (
    <div>
      {src ? (
        <img src={src} alt={caption} />
      ) : (
        <p>Image not available</p>
      )}
      <p>{caption}</p>
    </div>
  );
};

export default ImageWithCaption;
