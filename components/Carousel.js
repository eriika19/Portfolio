import { Component } from 'react';

import Nav from './Nav';
import heroData from '../data/hero';

class Carousel extends Component {
  componentDidMount() {
    const carouselJS = () => {
      if (typeof window !== 'undefined') {
        const bulmaCarousel = require('bulma-carousel');
        bulmaCarousel.attach('#carousel-demo', {
          slidesToScroll: 1,
          slidesToShow: 1,
          loop: true,
          autoplay: true,
          breakpoints: [
            { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
            { changePoint: 640, slidesToShow: 1, slidesToScroll: 1 },
            { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }
          ]
        });
      }
    };
    carouselJS();
  }

  createItem(i, src, thumbnail) {
    const selector = 'image is-3by1 has-background item-';

    return (
      <figure
        className={i === 0 ? 'image has-background item-0' : selector + i}>
        <img className='is-background' src={src} alt={thumbnail} />
      </figure>
    );
  }

  render() {
    const data = heroData.carouselItems;

    return (
      <section id='carousel' className='hero is-medium is-dark has-carousel'>
        <div id='carousel-demo' className='hero-carousel'>
          {data.map((item, i) => this.createItem(i, item.src, item.thumbnail))}
        </div>
        <div className='hero-head'>
          <Nav pageOpen='/' />
        </div>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-2 has-text-white mobile-hide'></p>
            <p className='subtitle is-4 has-text-white mobile-hide'>
              <br />
            </p>
          </div>
        </div>
        <style jsx global>
          {`
            .hero.is-dark svg {
              color: #4a4a4a;
            }
            @media (max-width: 768px) {
              .mobile-hide {
                display: table-column;
              }
              .slider-navigation-previous,
              .slider-navigation-next {
                display: none;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default Carousel;
