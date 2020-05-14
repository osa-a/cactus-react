import React from 'react';

import 'bootstrap/js/dist/carousel';
import './carousel.scss';

export class Carousel extends React.Component {
  render() {
    return (
      <div id="main__carousel" className="carousel slide d-none d-md-block" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#main__carousel" data-slide-to="0" className="active"></li>
          <li data-target="#main__carousel" data-slide-to="1"></li>
          <li data-target="#main__carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('./img/1.jpg')} className="main__carousel-img d-block w-100" alt="first slide" />
            <div className="carousel-caption d-none d-md-block w">
              <h2 className="main__carousel-header display-3">PLANT LOVERS</h2>
              <h3 className="main__carousel-header--caption m-5">
                Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna,
                vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </h3>
              <button type="button" className="main__carousel-button"><a href="#work">Learn More</a></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./img/2.jpg')} className="main__carousel-img d-block w-100" alt="second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="main__carousel-header display-3">PLANTS ADDICT</h2>
              <h3 className="main__carousel-header--caption text-center m-5">
                Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna,
                vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </h3>
              <button type="button" className="main__carousel-button"><a href="#work">Learn More</a></button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./img/3.jpg')} className="main__carousel-img d-block w-100" alt="third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="main__carousel-header display-3">INDOOR PLANTS</h2>
              <h3 className="main__carousel-header--caption text-center m-5">
                Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna,
                vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </h3>
              <button type="button" className="main__carousel-button"><a href="#work">Learn More</a></button>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#main__carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
        <a className="carousel-control-next" href="#main__carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only"></span>
        </a>
      </div>
    );
  }
}