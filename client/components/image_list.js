// Create our image list component

// Import React
import React from 'react';
import ImageDetail from './image_detail';
// Create our Component
const ImageList = (props) => {
  const renderImages = props.images
    .filter(image =>  !image.is_album)
    .map((image) => <ImageDetail key={image.title} image={image} />);

  return (
    <ul className="media-list list-group">
      {renderImages}
    </ul>
  );
};

// Export our component
export default ImageList;
