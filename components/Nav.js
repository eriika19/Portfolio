import { Component } from "react";
import Link from "next/link";
import "bulma/css/bulma.min.css";
import "bulma-extensions/bulma-divider/dist/css/bulma-divider.min.css";

import NavbarItem from "./NavbarItem";
import heroData from "../data/hero";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle;
  }

  state = {
    navMenuOpen: "",
    pageOpen: "",
    scrolled: ""
  };

  componentDidMount() {
    const { pageOpen, scrolled } = this.props;
    console.log(scrolled);

    this.setState({
      navMenuOpen: false,
      pageOpen: pageOpen,
      scrolled: scrolled
    });
  }

  toggle = () => {
    this.setState({
      navMenuOpen: !this.state.navMenuOpen
    });
  };

  render() {
    const data = heroData.navbarItems;
    const { scrolled } = this.props;

    return (
      <nav
        className={
          scrolled === 0
            ? "navbar is-fixed-top background-change"
            : "navbar is-fixed-top background-change scrolled"
        }
        position={this.state.scrolled}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link href="#footer">
              <a
                className={
                  scrolled === 0
                    ? "navbar-item name"
                    : "navbar-item name scrolled has-text-black"
                }
              >
                Enciso
              </a>
            </Link>
            <span
              className={
                this.state.navMenuOpen
                  ? "navbar-burger is-active"
                  : "navbar-burger"
              }
              data-target="navbarMenuHeroB"
              onClick={this.toggle}
            >
              <span
                className={
                  scrolled === 0 ? "has-text-white" : "has-text-black scrolled"
                }
              ></span>
              <span
                className={
                  scrolled === 0 ? "has-text-white" : "has-text-black scrolled"
                }
              ></span>
              <span
                className={
                  scrolled === 0 ? "has-text-white" : "has-text-black scrolled"
                }
              ></span>
            </span>
          </div>
          <div
            className={
              this.state.navMenuOpen ? "navbar-menu is-active" : "navbar-menu"
            }
            id="navbarMenuHeroB"
          >
            <div
              className={
                this.state.navMenuOpen
                  ? scrolled === 0
                    ? "navbar-end background-change is-active"
                    : "navbar-end background-change is-active scrolled"
                  : "navbar-end background-change"
              }
            >
              {data.map((props, i) => (
                <NavbarItem
                  {...props}
                  key={i}
                  pageOpen={this.state.pageOpen}
                  scrolled={scrolled}
                />
              ))}
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .name {
              font-weight: 900;
              font-size: 2.7rem;
              padding-top: 0;
            }
            .navbar-menu {
              background-color: transparent !important;
              box-shadow: none;
            }
            .scrolled {
              transition: color 200ms linear;
              transition: background-color 200ms linear;
            }
            .background-change.scrolled {
              background-color: #fff;
            }
            .background-change.is-active.scrolled {
              font-weight: 500;
            }
            .has-text-white {
              font-weight: 600;
            }
            .navbar-end.is-active {
              font-weight: 500;
            }

            @media (max-width: 426px) {
              .name {
                font-weight: 900;
                font-size: 2rem;
              }
            }
          `}
        </style>
      </nav>
    );
  }
}

export default Nav;
