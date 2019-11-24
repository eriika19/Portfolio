import { Component } from "react";

import Nav from "./Nav";

class Hero extends Component {
  componentDidMount() {
    const carouselJS = () => {
      if (typeof window !== "undefined") {
        const bulmaCarousel = require("bulma-carousel");
        bulmaCarousel.attach("#carousel-demo", {});
      }
    };
    carouselJS();
  }

  render() {
    const { pageOpen, scrolled } = this.props;

    return (
      <section id="carousel" className="hero is-medium has-carousel is-custom">
        <div id="carousel-demo" className="hero-carousel">
          <figure className="has-background item-1">
            <img
              className="is-background"
              src="/assets/head.png"
              alt="wallpaper"
            />
          </figure>
        </div>
        <div className="hero-head">
          <Nav pageOpen={pageOpen} scrolled={scrolled} />
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
            a.navbar-item.is-active {
              background-color: #0a0a0a !important;
            }
            a.navbar-item:hover {
              // background-color: #0a0a0a !important;
              background-color: #292929 !important;
            }
            a.has-text-black:hover {
              color: #fff !important;
            }
            .hide {
              display: none;
            }
            @media (max-width: 768px) {
              #carousel {
                width: 101%;
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

export default Hero;
