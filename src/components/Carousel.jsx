import React from 'react';
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import '../sass/carouselAdaptive.scss';

export class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        infinite={true}
        naturalSlideWidth={1920}
        naturalSlideHeight={858}
        totalSlides={3}
        isPlaying={true}
        interval={4000}
      >
        <Slider className="main__carousel">
          <Slide className="main__carousel-slide" index={0}>
            <div className="main__carousel-info-wrapper">
              <h4 className="main__carousel-header">Plant lovers</h4>
              <div className="main__carousel-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi nihil esse consequuntur alias reprehenderit architecto!
              </div>
              <button type="button" className="main__carousel-about-btn">MORE INFO</button>
            </div>
            <Image className="main__carousel-img" src={require('../img/carousel/1.jpg')} alt="first slide" />
          </Slide>
          <Slide className="main__carousel-slide" index={1}>
            <div className="main__carousel-info-wrapper">
              <h4 className="main__carousel-header">Indoor plants</h4>
              <div className="main__carousel-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis iure quod voluptates, exercitationem expedita temporibus.

              </div>
              <button type="button" className="main__carousel-about-btn">MORE INFO</button>
            </div>
            <Image className="main__carousel-img" src={require('../img/carousel/2.jpg')} alt="second slide" />
          </Slide>
          <Slide className="main__carousel-slide" index={2}>
            <div className="main__carousel-info-wrapper">
              <h4 className="main__carousel-header">More plants</h4>
              <div className="main__carousel-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit earum iste eius necessitatibus aliquam! Commodi quam
                neque atque ipsam?
              </div>
              <button type="button" className="main__carousel-about-btn">MORE INFO</button>
            </div>
            <Image className="main__carousel-img" src={require('../img/carousel/3.jpg')} alt="third slide" />
          </Slide>
        </Slider>
        <div className="main__carousel-btn-wrapper">
          <ButtonBack className="main__carousel-btn main__carousel-back-btn">‹</ButtonBack>
          <ButtonNext className="main__carousel-btn main__carousel-next-btn">›</ButtonNext>
        </div>
        <button className="main__carousel-scroll-btn">﹀
        </button>
      </CarouselProvider>
    );
  }
}