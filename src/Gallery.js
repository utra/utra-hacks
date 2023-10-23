import React, { useState, useEffect } from "react";
import "./Gallery.css";

import image1 from "./pictures/image1.png";
import image2 from "./pictures/image2.png";
import image3 from "./pictures/image3.png";
import image4 from "./pictures/image4.png";
import image5 from "./pictures/image5.png";
import image6 from "./pictures/image6.png";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [zoom, setZoom] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const rotationInterval = setInterval(rotateRight, 5000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, [selectedImage]);

  const rotateRight = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setTransitioning(true);

    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  };

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    if (zoom > 0.1) {
      setZoom(zoom - 0.1);
    }
  };

  return (
    <div
      className={`gallery-container ${transitioning ? "transitioning" : ""}`}
    >
      <div className="image-container" style={{ transform: `scale(${zoom})` }}>
        <img src={selectedImage} alt="Gallery" />
      </div>
      <div className="navigation-arrow left-arrow" onClick={rotateRight}>
        &lt;
      </div>
      <div className="navigation-arrow right-arrow" onClick={rotateRight}>
        &gt;
      </div>
    </div>
  );
};

export default Gallery;