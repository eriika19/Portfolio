import { Component } from 'react';

import Nav from './Nav';

class Hero extends Component {
  componentDidMount() {
    const carouselJS = () => {
      if (typeof window !== 'undefined') {
        const bulmaCarousel = require('bulma-carousel');
        bulmaCarousel.attach('#carousel-demo', {});
      }
    };
    carouselJS();
  }

  render() {
    const { pageOpen } = this.props;

    return (
      <section id='carousel' className='hero is-medium is-dark has-carousel'>
        <div id='carousel-demo' className='hero-carousel'>
          <figure className='has-background item-1'>
            <img
              className='is-background'
              src='/assets/head.png'
              alt='wallpaper'
            />
          </figure>
        </div>
        <div className='hero-head'>
          <Nav pageOpen={pageOpen} />
        </div>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-2 has-text-white'></p>
            <p className='subtitle is-4 has-text-white'>
              <br />
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
