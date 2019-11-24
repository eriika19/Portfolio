import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { renderEmail } from "react-html-email";
import "hover.css/css/hover-min.css";

//import InlineLink from "./inlineLink";
//import MyLink from "./email";
import contactData from "../data/contact";

class Footer extends Component {
  createItem = (i, link, icon, name) => {
    return (
      <div className="hvr-grow" key={i}>
        <li className="">
          <a className="show-on-hover" href={link} target="_blank">
            <span className="icon is-medium">
              <i className="hvr-icon">
                <FontAwesomeIcon className="fas fa-2x" icon={icon} />
              </i>
            </span>
            <p className="show-on-hover">{name}</p>
          </a>
        </li>
      </div>
    );
  };

  render() {
    const data = contactData.network;

    return (
      <footer id="footer" className="footer">
        <div className="tabs is-centered">
          <ul>
            {data.map((item, i) =>
              this.createItem(i, item.link, item.icon, item.name)
            )}
          </ul>
        </div>
        <style jsx global>
          {`
            .footer {
              margin-top: 3px;
              border-top-color: #dbdbdb;
              border-top-style: solid;
            }
            .tabs ul {
              border-bottom-style: inherit;
            }
            .tabs .icon:first-child {
              margin-right: 0;
            }
            .tabs a {
              display: list-item;
              text-align: -webkit-center;
            }
            .fa-2x {
              font-size: 1.75em;
            }
            .show-on-hover p {
              opacity: 0;
              transform: translateY(10px);
              transition: all 0.4s ease-in-out;
              overflow: hidden;
              position: relative;
            }
            .show-on-hover:hover p {
              opacity: 1;
              transition-delay: 0.009s;
              transform: translateY(0px);
            }
          `}
        </style>
      </footer>
    );
  }
}

export default Footer;
