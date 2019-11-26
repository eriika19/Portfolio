import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade'
import "hover.css/css/hover-min.css";

class Block extends Component {
  createItem = (i, src, text) => {
      return (
        <Fade bottom>
          <div className="column" key={i}>
            <figure className="icon is-large hvr-grow">
              <img className="hvr-icon" src={src} alt={text} />
            </figure>
            <p className="">{text}</p>
          </div>
        </Fade>
      );
  };

  render() {
    const { name, data } = this.props;

    return (
      <Fragment>
        <div>
          <h1 className="has-text-centered-touch title is-1">{name}</h1>
        </div>
        <div className="columns">
          {data.map((item, i) => this.createItem(i, item.src, item.text))}
        </div>

        <style jsx global>
          {`
            .columns {
              margin: 2rem auto;
              width: 100%;
              min-height: 45vh;
              //border-bottom: 3px solid rgba(0, 0, 0, 1);
            }
            .column {
              align-items: center;
              justify-content: center;
              text-align: center;
            }
            .icon.is-large {
              width: 4rem;
              height: 4rem;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default Block