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
          autoplaySpeed: 8000,
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
      <figure key={i}
        className={i === 0 ? 'image has-background item-0' : selector + i}>
        <img className='is-background' src={src} alt={thumbnail} />
      </figure>
    );
  }

  render() {
    const data = heroData.carouselItems;
    const { scrolled } = this.props;

    return (
      <section id="carousel" className="hero is-medium has-carousel is-custom">
        <div id="carousel-demo" className="hero-carousel">
          {data.map((item, i) => this.createItem(i, item.src, item.thumbnail))}
        </div>
        <div className="hero-head">
          <Nav pageOpen="/" scrolled={scrolled}/>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title is-2 has-text-white">
              <br />
            </p>
            <p className="subtitle is-6 has-text-white hide">
              <br />
              <br />
            </p>
          </div>
        </div>
        <style jsx global>
          {`
            .navbar-menu {
              padding: 0;
            }
            .hero.is-custom,
            .hero.is-custom a {
              color: #fff;
            }

            .hero.is-custom svg {
              color: #4a4a4a;
            }
            a.navbar-item.is-active {
              background-color: #0a0a0a !important;
            }
            a.navbar-item:hover {
              // background-color: #0a0a0a !important;
              background-color: #292929 !important;
            }
            .hide {
              display: none;
            }
            a.has-text-black:hover {
              color: #fff !important;
            }

            @media (max-width: 1087px) {
            }
            @media (max-width: 768px) {
              #carousel {
                width: 101%;
              }

              .slider-navigation-previous,
              .slider-navigation-next {
                display: none;
              }
              .hide {
                display: block;
              }
              .is-3by1,
              .item-0 {
                width: 100%;
                height: 100%;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default Carousel;
