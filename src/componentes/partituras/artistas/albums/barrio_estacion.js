import React from "react";
import Menu from "../../../menu/Menu";
import ReactPlayer from 'react-player'

class barrio_estacion extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <main role="main" className="flex-shrink-0 mt-5">
          <section className="text-center">
            <div className="container">
              <h1>Barrio Estacion </h1>
              <p className="lead text-muted">Canciones</p>
            </div>
          </section>
          <div className="row">
            <div className="col-md-6">
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action ">
                  Coma
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Me muelen a palos
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Fiesta
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Una nube cuelga sobre mi
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Andén
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Si todo esto es lo que hay
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Capablanca
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Deudas
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Nada nuevo bajo el sol
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  El tiempo que se va
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  El mismo lugar
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Tarde
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                  Abril
                </a>
            
              </div>
            </div>
            <ReactPlayer url='https://www.youtube.com/watch?v=e7NPko4kUdo&list=PL_DdzbW6BavHOgPyPtdenruJGESVKbfN7'/>
          </div>
        </main>
      </>
    );
  }
}

export default barrio_estacion;
