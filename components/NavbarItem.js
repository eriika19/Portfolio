import { Component } from "react";
import Link from "next/link";

class NavbarItem extends Component {
  render() {
    const { page, route, pageOpen, scrolled } = this.props;

    return (
      <Link href={route}>
        <a
          className={
            pageOpen === route
              ? scrolled === 0
                ? "navbar-item is-active"
                : "navbar-item is-active scrolled"
              : scrolled === 0
              ? "navbar-item"
              : "navbar-item scrolled has-text-black"
          }
        >
          {page}
        </a>
      </Link>
    );
  }
}

export default NavbarItem;
