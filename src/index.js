import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import Home from "./componentes/home/Home";
import Partituras from "./componentes/partituras/partituras";
import LosBunkers from "./componentes/partituras/artistas/los_bunkers";
import TheBeatles from "./componentes/partituras/artistas/the_beatles";
import usuario from "./componentes/usuario/usuario";
import barrio_estacion from "./componentes/partituras/artistas/albums/barrio_estacion";
import a_hard_days_night from "./componentes/partituras/artistas/albums/a_hard_days_night"
ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/partituras" component={Partituras} />
        <Route path="/los_bunkers" component={LosBunkers} />
        <Route path="/the_beatles" component={TheBeatles} />
        <Route path="/mi_cuenta" component={usuario}/>
        <Route path="/barrio_estacion" component={barrio_estacion}/>
        <Route path="/a_hard_days_night" component={a_hard_days_night}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
