import { Component } from "react";

class FirstCard extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextProps.load, this.props.load);
      return (
          (nextProps.load != this.props.load) || (nextProps.move != this.props.move)
      );
  }
  render() {
    const { load, move } = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image">
                <img
                  src="https://unsplash.it/400/300?image=503"
                  className={load || move ? "fadeIn" : "fadedfx"}
                  alt="img-demo"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Biografía </p>
              <p className="subtitle is-6">se trabajó en...</p>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .card {
            margin: 1rem auto;
          }
            .fadedfx {
              background-color: #fe5652;
              opacity:0;
              visibility: hidden;
            }

            .fadeIn {
              visibility: visible;
              transition: all 2s ease-in-out;
              opacity: 1;
            }
            }
          `}
        </style>
      </div>
    );
  }
}

export default FirstCard;
