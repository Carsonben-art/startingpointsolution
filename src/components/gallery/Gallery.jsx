// Gallery.jsx
import React from 'react';
import './Gallery.css';

import im1 from '../../assets/im1.JPG'
import im2 from '../../assets/im2.JPG'
import im3 from '../../assets/im3.JPG'
import im4 from '../../assets/im4.JPG'
import im5 from '../../assets/im5.JPG'
import im6 from '../../assets/im6.JPG'
const Gallery = ({id}) => {
  
  const images = [
    { id: 1, src: im1, alt: 'Image 1' },
    { id: 2, src: im2, alt: 'Image 2' },
    { id: 3, src: im3, alt: 'Image 3' },
    { id: 4, src: im4, alt: 'Image 4' },
    { id: 5, src: im5, alt: 'Image 5' },
    { id: 6, src: im6, alt: 'Image 6' },
  ];

  return (
    <section className="gallery-section" id={id}>
      <h2 className="gallery-title">Frames of <br/> <span className='highlight'>Transformation</span></h2>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className={`gallery-item item-${image.id}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;