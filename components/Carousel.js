import React, { Component } from 'react';

import Nav from './Nav';

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

  render() {
    return (
      <section id='carousel' className='hero is-medium is-dark has-carousel'>
        <div id='carousel-demo' className='hero-carousel'>
          <figure className='has-background item-1'>
            <img
              className='is-background'
              src='/static/assets/head.png'
              alt='wallpaper'
            />
          </figure>
          <figure className='image is-3by1 has-background item-2'>
            <img
              className='is-background'
              src='/static/assets/md_links.jpg'
              alt='MD_Links'
            />
          </figure>
          <figure className='image is-3by1 has-background item-3'>
            <img
              className='is-background'
              src='/static/assets/mesereando.png'
              alt='Mesereando'
            />
          </figure>
          <figure className='image is-3by1 has-background item-4'>
            <img
              className='is-background'
              src='/static/assets/sacbe.png'
              alt='Sacbé'
            />
          </figure>
          <figure className='image is-3by1 has-background item-5'>
            <img
              className='is-background'
              src='/static/assets/steam_desktop.png'
              alt='Steam-escritorio'
            />
          </figure>
        </div>
        <div className='hero-head'>
          <Nav pageOpen='home' />
        </div>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-2 has-text-white'></p>
            <p className='subtitle is-4 has-text-white'>
              <br />
            </p>
          </div>
        </div>
        <style jsx global>
          {`
            .hero.is-dark svg {
              color: #4a4a4a;
            }
          `}
        </style>
      </section>
    );
  }
}

export default Carousel;
