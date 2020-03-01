import React from 'react';
import img1 from '../../assets/img/naushniki_fotoapparat_retro_122094_1920x1080.jpg';
import img2 from '../../assets/img/kamni_les_mrak_svet_zamok_69204_1920x1080.jpg';
import img3 from '../../assets/img/mashina_krasnyj_sportkar_160574_1920x1080.jpg';
import img4 from '../../assets/img/planeta_oblaka_svet_zvezdy_94996_1920x1080.jpg';
import {Carousel} from 'react-bootstrap';

export default React.memo(() => {
  const images = [
    {
      src: img1,
      title: 'First slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },{
      src: img2,
      title: 'Second slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },{
      src: img3,
      title: 'Third slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },{
      src: img4,
      title: 'Fourth slide label',
      desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
  ];

  return (
      <>
        <Carousel>
          {images.map(({src, title, desc}) => (
              <Carousel.Item key={title}>
                <img
                    className="d-block w-100"
                    src={src}
                    alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
          ))}
        </Carousel>
      </>
  );
});