import 'hover.css/css/hover-min.css'

import FooterItem from './FooterItem';
import contactData from '../data/contact';

const Footer = () => (
  <footer id="contact" className='footer'>
    <div className='tabs is-centered'>
      <ul>
{contactData.network.map((props,i) => <FooterItem {...props} key={i}/>)}
      </ul>
    </div>
    <style jsx>
      {`
        .footer {
          margin-top: 3px;
          border-top-color: #dbdbdb;
          border-top-style: solid;
        }
        .tabs ul {
          border-bottom-style: inherit;
        }
      `}
    </style>
  </footer>
);

export default Footer;
