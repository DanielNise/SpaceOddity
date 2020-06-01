import React from "react";
import { NavLink } from "react-router-dom";
import firebase from "../firebase/firebase";
import { useState } from "react";

const loginWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      //setUsuario(user)
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};

/*///Hook persona que guarda los datos de una persona
const [persona, setPersona] = useState({});
//hook de personas
const [personas, setPersonas] = useState([]);
const [resultado, setResultado] = useState(false);
const [usuario,setUsuario]=useState({})
//resultados del check
const asignarResultado = (resultado) => {
  let p = persona;
  p["resultado"] = resultado.mensaje;
  p["sintomas"] = resultado.sintomas;
  let ps = personas;
  ps.push(p);
  setPersonas(ps);
  setResultado(true);
};*/

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavLink to="/" className="navbar-brand">
          SpaceOddity
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/partituras" className="nav-link">
                Partituras
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mi_cuenta" className="nav-link">
                Mi cuenta
              </NavLink>
            </li>
          </ul>

          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button type="button" class="btn btn-outline-success">
              Buscar
            </button>
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={loginWithGoogle}
              id="iniciarsesion"
            >
              Iniciar Sesion
            </button>
          </form>
        </div>
        {}
      </nav>
    );
  }
}

export default Menu;
