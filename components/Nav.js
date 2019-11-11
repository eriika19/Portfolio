import React, { Component } from 'react';
import Link from 'next/link';
import 'bulma/css/bulma.min.css';

import NavbarItem from './NavbarItem';
import heroData from '../data/hero';

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
    const data = heroData.navbarItems;

    return (
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link href='/contact'>
              <figure
                className='image is-logo'>
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
              <span className='has-text-white'></span>
              <span className='has-text-white'></span>
              <span className='has-text-white'></span>
            </span>
          </div>
          <div
            className={
              this.state.navMenuOpen ? 'navbar-menu is-active' : 'navbar-menu'
            }
            id='navbarMenuHeroB'>
            <div
              className={
                this.state.navMenuOpen ? 'navbar-end is-active' : 'navbar-end'
              }>
              {data.map((props, i) => (
                <NavbarItem {...props} key={i} pageOpen={this.state.pageOpen} />
              ))}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .navbar-menu {
              background-color: transparent !important;
              box-shadow: none;
            }
            .has-text-white {
              font-weight: 600;
            }
            .navbar-end.is-active {
              font-weight: 500;
            }
            .is-logo:hover {
              background-color: #292929;
              pointer: cursor;
            }
            .is-logo img {
              height: 3.03rem;
              width: auto;
            }

            @media (max-width: 768px) {
              .is-logo img {
                height: 2.5rem;
                width: auto;
              }
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Nav;
