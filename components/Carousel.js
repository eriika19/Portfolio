import React, { Component } from 'react';
import Link from 'next/link';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';

import Nav from './Nav';

class Carousel extends Component {
  componentDidMount() {
    const bulmaCarousel = () => {
      if (typeof window !== 'undefined') {
        return require('bulma-carousel');
      } else {
        bulmaCarousel.attach('#carousel-demo', {
          slidesToScroll: 1,
          slidesToShow: 4
        });
      }
    };
  }

  render() {
    return (
      <section id='carousel' className='hero is-medium is-dark has-carousel carousel-animate-slide'>
        <div id='carousel-demo' className='hero-carousel carousel-container'>
        <div className='carousel-item has-background is-active item-1'>
            <img
              className='is-background'
              src='/static/fondo.png'
              alt='wallpaper'
            />
          </div>
{/*           <div className='carousel-item has-background is-active item-1'>
            <img
              className='is-background'
              src='/static/mesereando.png'
              alt='Mesereando'
            />
          </div> */}
          <div className='carousel-item has-background item-2'>
            <img
              className='is-background'
              src='/static/md_links.jpg'
              alt='MD_Links'
            />
          </div>
          <div className='carousel-item has-background item-3'>
            <img
              className='is-background'
              src='/static/sacbe.png'
              alt='Sacbé'
            />
          </div>
        </div>
        <div className='hero-head'>
          <Nav pageOpen='home'/>
        </div>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title has-text-white'>Título</p>
            <p className='subtitle has-text-white'>Subtítulo</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
