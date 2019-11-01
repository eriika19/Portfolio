import React, { Component } from 'react';
import Link from 'next/link';

import 'bulma/css/bulma.min.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      navMenuOpen: false
    };
  }

  toggle() {
    this.setState({
      navMenuOpen: !this.state.navMenuOpen
    });
  }

  render() {
    return (
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link className='navbar-item' href='/'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              alt='logo'
              width='112'
              height='28'
            />
          </Link>
          <a
            role='button'
            className={
              this.state.navMenuOpen
                ? 'navbar-burger is-active'
                : 'navbar-burger'
            }
            data-target='navMenu'
            aria-label='menu'
            aria-expanded='false'
            onClick={this.toggle}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div
          className={
            this.state.navMenuOpen ? 'navbar-menu is-active' : 'navbar-menu'
          }
          id='navMenu'>
          <div className='navbar-end'>
            <Link className='navbar-item' href='/'>
              <img
                src='https://bulma.io/images/bulma-logo.png'
                alt='logo'
                width='112'
                height='28'
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
