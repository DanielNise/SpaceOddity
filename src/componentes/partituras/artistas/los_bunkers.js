import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../menu/Menu";


class los_bunkers extends React.Component {
  render() {
    return (
      <>
        <Menu/>
        <main role="main" className="flex-shrink-0 mt-5">
          <section className="text-center">
            <div className="container">
              <h1>Los Bunkers </h1>
              <p className="lead text-muted">Albums</p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="https://i.pinimg.com/originals/8e/61/f8/8e61f86645632ad41c1e63aa54727391.jpg"
                      width="348"
                      height="320"
                    ></img>
                    <div className="card-body">
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5>Barrio Estacion</h5>
                        <div className="btn-group">
                          <NavLink to="/barrio_estacion" className="nav-link">
                            Ver mas
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default los_bunkers;
