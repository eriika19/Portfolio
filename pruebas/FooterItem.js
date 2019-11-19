import { Component } from 'react';

class FooterItem extends Component {
    render() {
        const { name, link, icon } = this.props;
        return (
          <li className="hvr-float-shadow">
            <a className="hvr-grow" href={link} target="_blank">
              <FontAwesomeIcon icon={[icon]} />
              {/* <i className={icon}></i> */}
              <p>{name}</p>
            </a>
          </li>
        );
    }
}

export default FooterItem;