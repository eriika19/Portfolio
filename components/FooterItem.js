import { Component } from 'react';

class FooterItem extends Component {
    render() {
        const { name, link, icon } = this.props;
        return (
          <li className="hvr-float-shadow">
            <a className="hvr-grow" href={link} target="_blank">
              <span>
                <i className={icon}></i>
              </span>
              <span>{name}</span>
            </a>
          </li>
        );
    }
}

export default FooterItem;