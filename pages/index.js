import React, { Component } from "react";
import Head from "next/head";

import Carousel from "../components/Carousel";
import Dashboard from "../components/Dashboard";

class Home extends Component {
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
      <section id="home">
        <Head>
          <title>Portafolio | Enciso FE</title>
        </Head>
        <Carousel scrolled={scrolled} />
        <Dashboard />
      </section>
    );
  }
}

export default Home;
