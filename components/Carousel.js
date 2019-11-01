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
        <section className='hero is-medium has-carousel'>
              <div id='carousel-demo' className='hero-carousel'>
                  
                  <div className='item-1'>
                    <img className="is-background" src="/static/mesereando.png" alt="mesereando"/>                      
          </div>
          <div className='item-2'></div>
          <div className='item-3'></div>
        </div>
        <div className='hero-head'><Nav/></div>
        <div className='hero-body'>Proyectos</div>
        <div className='hero-foot'></div>
      </section> 
        );
        /*           
                      <div>
        <div className='carousel carousel-animated carousel-animate-slide'>
            <div className='carousel-container'>
                <div className='carousel-item has-background is-active'>
                    <img className="is-background" src="" alt="" width="640" height="310" />
                    <div className="title">Merry Christmas</div>
                </div>
                <div className='carousel-item has-background'>
                    <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
                    <div className="title">Original Gift: Offer a song with <a href="https://lasongbox.com" target="_blank">La Song Box</a></div>
                </div>
                <div className='carousel-item has-background'>
                    <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
                    <div className="title">Sushi time</div>
                </div>
            </div>
        </div>
    </div>*/
        
        /*   <header className="navbar">
        <section className="navbar-section">
        <Link prefetch href="/">
            <button className="btn btn-link text-bold">Home</button>
          </Link>
        </section>
      </header> */
  }
}

export default Carousel;
