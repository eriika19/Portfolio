import Link from 'next/link';
import { Component } from "react";
import Head from 'next/head';

import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

class ContactPage extends Component {
  state = {
    scrolled: ""
  };

  componentDidMount() {
    this.setState({
      scrolled: 0
    });
  }

  handleScroll = () => {
    this.setState({
      scrolled: window.scrollY
    });
  };

  render() {
    const { scrolled } = this.state;

    return (
      <section id="contact" onWheel={this.handleScroll}>
        <Head>
          <title> Enciso FE | Contacto</title>
        </Head>
        <Hero pageOpen="/contact" scrolled={scrolled} />
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Enciso FE | Contacto</p>
              <p className="subtitle">Contacto</p>
              <div className="content">
                Aquí pondré un formulario e información de contacto
              </div>
            </article>
          </div>
        </div>
        <ContactForm />
        <div className="level-item">
          <Link href="/">
            <button className="button is-size-4 is-focused">Regresar</button>
          </Link>
        </div>

        <div class="is-divider" data-content="O"></div>
      </section>
    );
  }
}

export default ContactPage;
