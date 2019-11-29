import { Component } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";

import Hero from "../components/Hero";
import Block from "../components/Block.js";
import aboutData from "../data/about.json";

class AboutPage extends Component {
  state = {
    scrolled: ""
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.setState({
      scrolled: 0
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrolled: window.scrollY
    });
  };

  render() {
    const { scrolled } = this.state;

    return (
      <section id="about">
        <Head>
          <title> Enciso FE | Acerca de mí </title>
        </Head>
        <Hero pageOpen="/about" scrolled={scrolled} />

        <div id="main" className="container">
          <Block name="Tech Skills" data={aboutData.tech1} />
          <Block data={aboutData.tech2} />
          <Block data={aboutData.tech3} />
          <Block name="Soft Skills" data={aboutData.soft} />
          <Block name="Intereses" data={aboutData.interest} />
          <Fade top>
            <div className="columns">
              <div className="column">
                <a
                  className="cv hvr-grow hvr-underline-from-center  has-text-weight-bold is-size-4"
                  href="/ItzelE_CV.pdf"
                  download
                >
                  <figure className="icon is-large">
                    <img className="" src="/assets/icons/cv.png" alt="CV" />
                  </figure>
                  <p className="cv">CV</p>
                </a>
              </div>
            </div>
          </Fade>
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
            a.cv {
              margin-top: 1.5rem;
            }
            p.cv {
              margin-top: -1rem;
              margin-bottom: 1rem;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default AboutPage;
