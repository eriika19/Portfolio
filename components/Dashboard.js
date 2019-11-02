import 'bulma/css/bulma.min.css';

//import Oops from '../components/Oops';
//import Project from '../components/Project';
//import ProjectData from '../data/projects.json';

const Dashboard= () => (
  <section id="dashboard">    
    <div className="tile is-ancestor">
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">Vertical...</p>
          <p className="subtitle">Top tile</p>
        </article>
        <article className="tile is-child notification is-warning">
          <p className="title">...tiles</p>
          <p className="subtitle">Bottom tile</p>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-info">
          <p className="title">Middle tile</p>
          <p className="subtitle">With an image</p>
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png"/>
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Wide tile</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
          {/* <!-- Content --> */}
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
        <div className="content">
          {/* <!-- Content --> */}
        </div>
      </div>
    </article>
  </div>
</div>
    {/* {ProjectData.projects.map(props => <Project {...props} key={props.id} />)} */}
    {/* {!projects ? <Oops /> : projects.map(props => <Project {...props} key={props.id} />)} */}
  </section>
);

export default Dashboard;