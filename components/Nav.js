import React, { Component } from 'react';
import Link from 'next/link';
import 'bulma/css/bulma.min.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle;
  }

  state = {
    navMenuOpen: '',
    pageOpen: ''
  };

  componentDidMount() {
    const { pageOpen } = this.props;

    this.setState({
      navMenuOpen: false,
      pageOpen: pageOpen
    });
  }

  toggle = () => {
    this.setState({
      navMenuOpen: !this.state.navMenuOpen
    });
  };

  render() {
    return (
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link href='/contact'>
              <figure
                className={
                  this.state.pageOpen === 'contact'
                    ? 'image is-logo is-active'
                    : 'image is-logo'
                }>
                <img src='/enciso.png' alt='Logo-Enciso' />
              </figure>
            </Link>
            <span
              className={
                this.state.navMenuOpen
                  ? 'navbar-burger is-active'
                  : 'navbar-burger'
              }
              data-target='navbarMenuHeroB'
              onClick={this.toggle}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            className={
              this.state.navMenuOpen ? 'navbar-menu is-active' : 'navbar-menu'
            }
            id='navbarMenuHeroB'>
            <div className='navbar-end'>
              <Link href='/about'>
                <a
                  className={
                    this.state.pageOpen === 'about'
                      ? 'navbar-item is-active'
                      : 'navbar-item'
                  }>
                  Acerca de mí
                </a>
              </Link>
              <Link href='/contact'>
                <a
                  className={
                    this.state.pageOpen === 'contact'
                      ? 'navbar-item is-active'
                      : 'navbar-item'
                  }>
                  Contacto
                </a>
              </Link>
              <Link href='/'>
                <a
                  className={
                    this.state.pageOpen === 'home'
                      ? 'navbar-item is-active'
                      : 'navbar-item'
                  }>
                  Inicio
                </a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .navbar-menu {
              background-color: transparent !important;
            }
            .is-logo:hover {
              background-color: #292929;
              pointer: cursor;
            }
            .is-logo.is-active {
              background-color: #292929;
            }
            .is-logo img {
              height: 3.03rem;
              width: auto;
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Nav;
