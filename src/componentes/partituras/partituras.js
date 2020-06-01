import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "../menu/Menu";

class Partituras extends React.Component {
  render() {
    return (
      <>
        <Menu />

        <main role="main" className="flex-shrink-0 mt-5">
          <section className="text-center">
            <div className="container">
              <h1>Partituras </h1>
              <p className="lead text-muted">Artistas</p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="https://mott.pe/noticias/wp-content/uploads/2018/01/Portada-Beatles.jpg"
                      width="348"
                      height="255"
                    ></img>
                    <div className="card-body">
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5>The Beatles</h5>
                        <div className="btn-group">
                          <NavLink to="/the_beatles" className="nav-link">
                            Ver mas
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c7518fb-1b02-480f-b72b-22c310f70bbf/d4abdjt-80a64622-3754-49bd-b4d5-03427fc1ec51.jpg/v1/fill/w_900,h_491,q_75,strp/los_bunkers_en_maipu_by_donsaqqu_d4abdjt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDkxIiwicGF0aCI6IlwvZlwvMWM3NTE4ZmItMWIwMi00ODBmLWI3MmItMjJjMzEwZjcwYmJmXC9kNGFiZGp0LTgwYTY0NjIyLTM3NTQtNDliZC1iNGQ1LTAzNDI3ZmMxZWM1MS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vVt8jJqg66kH4mMzbF4mc9FZuHysKp2B_QfQuOGWyLA"
                      width="348"
                      height="255"
                    ></img>
                    <div className="card-body">
                      <p className="card-text"></p>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5>Los Bunkers</h5>
                        <br />
                        <div className="btn-group">
                          <NavLink to="/los_bunkers" className="nav-link">
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

export default Partituras;
