import { Component } from 'react';
import Link from 'next/link';


class NavbarItem extends Component {
  render() {
    const { page, route, pageOpen } = this.props;

    return (
      <Link href={route}>
        <a
          className={
            pageOpen === route ? 'navbar-item is-active' : 'navbar-item'
          }>
          {page}
        </a>
      </Link>
    );
  }
}

export default NavbarItem;
