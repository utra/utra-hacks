import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { Carousel } from "react-bootstrap";

/*
import image1 from "./pictures/picture1.png";
import image2 from "./pictures/picture2.png";
import image3 from "./pictures/picture3.png";
import image4 from "./pictures/picture4.jpg";
import image5 from "./pictures/picture5.jpg";
import image6 from "./pictures/picture6.jpg";
import image7 from "./pictures/picture7.jpg";
import image8 from "./pictures/picture8.jpg";
import image9 from "./pictures/picture9.jpg";
import image10 from "./pictures/picture10.jpg";
import image11 from "./pictures/picture11.jpg";
import image12 from "./pictures/picture12.jpg"; 
*/


const image1 = "https://drive.google.com/uc?export=view&id=1lvgucTV58Ka8wsCg1EXY88LJ5tj096p6";
const image2 = "https://drive.google.com/uc?export=view&id=1_An84jpmb5TyFrwJGL0ATjJhNTlrmyF0";
const image3 = "https://drive.google.com/uc?export=view&id=1_r0Eg2SXTEZiBRfo33tzmlgyZ0Hc2ZSq";
const image4 = "https://drive.google.com/uc?export=view&id=10kcGLXou6tgslcrGL-CMjw7OhrMHLvVV";
const image5 = "https://drive.google.com/uc?export=view&id=1J2VSedMQ9N3Jk1fgLAe4QOwgR-7VtScn";
const image6 = "https://drive.google.com/uc?export=view&id=1Z9I45WywKESbNJBFxE6WrDeD4gwKyW9P";
const image7 = "https://drive.google.com/uc?export=view&id=1mTudbVpMm9NPbb9MjRItSBkR_qNINxPG";
const image8 = "https://drive.google.com/uc?export=view&id=1RZRlYwvdy4SHjuJ-mY2M0SEqTQe3yPUK";
const image9 = "https://drive.google.com/uc?export=view&id=16cckQNyOC8qeVFnMOIqKoR1NrwMJ9jzq";
const image10 = "https://drive.google.com/uc?export=view&id=1fgEtJmNw2hWUbfGirNdh-WBOnq0gRB6j";
const image11 = "https://drive.google.com/uc?export=view&id=12amiYAcwvPrQr3VpGYidyQ8o2GbAjPR1";
const image12 = "https://drive.google.com/uc?export=view&id=10Us2FacX042jxxJxIWZAp8K2xp9zgzHs";


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];


const Gallery = () => {
  const [index, setIndex] = useState(0);
  const imagesPerPage = 4;
  const totalImages = images.length;
  const loopCount = 100;

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      const nextIndex = (index + imagesPerPage) % totalImages;
      setIndex(nextIndex);
    }, 4000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, [index, totalImages, imagesPerPage]);

  const renderCarouselItems = () => {
    const carouselItems = [];

    for (let j = 0; j < loopCount; j++) {
      for (let i = 0; i < totalImages; i += imagesPerPage) {
        const subset = images.slice(i, i + imagesPerPage);
        carouselItems.push(
          <Carousel.Item key={`set-${j}-${i / imagesPerPage}`}>
            <div className="d-flex justify-content-around">
              {subset.map((image, idx) => (
                <img
                  key={`img-${j}-${i + idx}`}
                  className="d-block w-25"
                  src={image}
                  alt={`Gallery ${i + idx}`}
                />
              ))}
            </div>
          </Carousel.Item>
        );
      }
    }

    return carouselItems;
  };

  return (
    <div id="gallery" className="gallery-wrapper" style={{paddingBottom:"5%"}}>
      <h1 className="text-center faq-title">Gallery</h1>
      <Carousel
        activeIndex={index}
        indicators={false}
        pause={false}
        wrap={true}
        slide={true}
        controls={true}
        touch={true}
        onSelect={setIndex}
        interval={4000}
      >
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
};

export default Gallery;
