import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";
import "hover.css/css/hover-min.css";

class Block extends Component {
  createItem = (i, src, text) => {
    return (
      <Fade bottom>
        <div className="column" key={i}>
        <div className="hvr-grow">
          <figure className=" icon is-large">
            <img className="" src={src} alt={text} />
          </figure>
          <p className="">{text}</p>
          </div>
        </div>
      </Fade>
    );
  };

  render() {
    const { name, data } = this.props;

    return name ?
(      <Fragment>
        <div>
          <h1 className="has-text-centered-touch title is-1 title-columns">{name}</h1>
        </div>
        <div className="columns">
          {data.map((item, i) => this.createItem(i, item.src, item.text))}
        </div>

        <style jsx global>
          {`
          .title-columns {
          margin-top: 5rem;
          }
            .columns {
              margin: 2rem auto;
              width: 100%;
              min-height: 22vh;
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
      ) : ( 
      <Fragment>
        <div className="columns">
          {data.map((item, i) => this.createItem(i, item.src, item.text))}
        </div>

        <style jsx global>
          {`
            .columns {
              width: 100%;
              min-height: 22vh;
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

export default Block;
