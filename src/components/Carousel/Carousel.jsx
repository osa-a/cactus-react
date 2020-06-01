import React from 'react';

import 'bootstrap/js/dist/carousel';
import './carousel.scss';

export class Carousel extends React.Component {

  render() {
    const dataCarousel = this.props.dataCarousel;
    return (
      <div id="main__carousel" className="carousel slide d-none d-md-block" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#main__carousel" data-slide-to="0" className="active"></li>
          <li data-target="#main__carousel" data-slide-to="1"></li>
          <li data-target="#main__carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {/* creating carousel slides */}
          {Object.keys(dataCarousel).map(item => (
            // switching active slide 
            <div key={item} className={`carousel-item ${item === 'first' ? "active" : ""}`}>
              <img src={require(`./img/${dataCarousel[item].img}`)} className="main__carousel-img d-block w-100" alt={`${item} slide`} />
              <div className="carousel-caption d-none d-md-block w">
                <h2 className="main__carousel-header">{dataCarousel[item].header}</h2>
                <h3 className="main__carousel-header--caption">{dataCarousel[item].sub}</h3>
                <button type="button" className="main__carousel-button"><a href={dataCarousel[item].link}>Learn More</a></button>
              </div>
            </div>
          ))}
        </div>
        <a className="carousel-control-prev" href="#main__carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#main__carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div >
    );
  }
}