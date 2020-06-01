import React from "react";
import Menu from "../../../menu/Menu";
import ReactPlayer from "react-player";

class a_hard_days_night extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <main role="main" className="flex-shrink-0 mt-5">
          <section className="text-center">
            <div className="container">
              <h1>A Hard Day's Night</h1>
              <p className="lead text-muted">Canciones</p>
            </div>
          </section>
          <div className="row">
            <div className="col-md-6">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action ">
                  A Hard Day's Night
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  I Should Have Known Better
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Fiesta
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  If I Fell
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  I'm Happy Just to Dance with You
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  And I Love Her
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Tell Me Why
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Can't Buy Me Love
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Any Time at All
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  I'll Cry Instead
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Things We Said Today
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  When I Get Home
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  You Can't Do That
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  I'll Be Back
                </a>
              </div>
            </div>
            <ReactPlayer url="https://www.youtube.com/watch?v=zx2TFk0vh1I&list=PLycVTiaj8OI-HjTjakWPpJO9Y6kh1icp2" />
          </div>
        </main>
      </>
    );
  }
}

export default a_hard_days_night;
