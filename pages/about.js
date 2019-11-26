import { Component } from "react";
import Head from "next/head";

import Hero from "../components/Hero";
import Block from "../components/Block.js";
import aboutData from "../data/about.json";

class AboutPage extends Component {
  state = {
    scrolled: "",
    move: "",
    load: ""
  };

  componentDidMount() {
    window.addEventListener("load", this.handleLoad, true);
    window.addEventListener("scroll", this.handleScroll, true);
    window.addEventListener("scroll", this.handleMove, true);
    this.setState({
      scrolled: 0,
      move: false,
      load: false
    });
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.handleMove);
  }

  handleScroll = () => {
    this.setState({
      scrolled: window.scrollY
    });
  };

  handleMove = () => {
    if (window.pageYOffset > 0) {
      this.setState({
        move: true
      });
    }
  };

  handleLoad = () => {
    setTimeout(
      () =>
        this.setState({
          load: true
        }),
      500
    );
  };

  render() {
    // ({ title, date, tags, description, thumbnail, type, github, demo, label }) =>
    const { scrolled, load, move } = this.state;

    return (
      <section id="about">
        <Head>
          <title> Enciso FE | Acerca de mí </title>
        </Head>
        <Hero pageOpen="/about" scrolled={scrolled} />

        <div id="main" className="container">
          <Block name="Tech Skills" data={aboutData.tech} />
          <Block name="Soft Skills" data={aboutData.soft} />
          <Block name="Intereses"  data={aboutData.interest} />
        </div>

        <style jsx>
          {`
                      .container {
                margin-top: 3rem; 
            }
            .card {
              margin: 1rem auto;
            }
            .img-left {
              margin-right: 1rem;
            }

            .image img {
              width: auto;
            }

              .fadedfx {
                background-color: #fe5652;
                opacity: 0;
                visibility: hidden;
              }

              .fadeIn {
                visibility: visible;
                transition: all 2s ease-in-out;
                opacity: 1;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default AboutPage;
