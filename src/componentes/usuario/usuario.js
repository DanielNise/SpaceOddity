import React from "react";
import "../../App.css";
import firebase from "../firebase/firebase";
import Menu from "../menu/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

var db = firebase.firestore();

class usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrumentos: "",
      años: "",
      redes: "",
      telefono: "",
    };
  }

  async saveValueFB() {
    const db = firebase.firestore();
    return await db.collection("persona").add({
      instrumentos: this.state.instrumentos,
      años: this.state.años,
      redes: this.state.redes,
      telefono: this.state.telefono,
    });
  }
  saveValue(e, estado) {
    this.setState({ [estado]: e.target.value });
  }
  async send() {
    let rec = await this.saveValueFB();
    let persona = this.state;
    persona["docRef"] = rec.id;
    this.props.setPersona(persona);
  }

  Descarga() {
    var storage = firebase.storage();
    var pathReference = storage.refFromURL(
      "gs://spaceoddity-8d804.appspot.com/Prueba.pdf"
    );
  }

  render() {
    return (
      <>
        <Menu />

        <main role="main" className="flex-shrink-0 mt-5">
          <div className="container">
            <h1 className="mb-5">Mi cuenta</h1>

            <div className="row">
              <div className="col-md-6">
                <form className="mb-5">
                  <div className="form-group">
                    <label className="negrita">Instrumentos</label>
                    <input
                      type="text"
                      className="form-control"
                      label={"Instrumentos"}
                      onChange={(e) => this.saveValue(e, "instrumentos")}
                    />
                  </div>

                  <div className="form-group">
                    <label className="negrita">Años de experiencia</label>
                    <input
                      type="text"
                      className="form-control"
                      label={"Años"}
                      onChange={(e) => this.saveValue(e, "años")}
                    />
                  </div>

                  <div className="form-group">
                    <label className="negrita">Redes sociales</label>
                    <input
                      type="text"
                      className="form-control"
                      label={"RedesSociales"}
                      onChange={(e) => this.saveValue(e, "redes")}
                    />
                  </div>

                  <div className="form-group">
                    <label className="negrita">Telefono</label>
                    <input
                      type="text"
                      className="form-control"
                      label={"Telefono"}
                      onChange={(e) => this.saveValue(e, "telefono")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() => this.send()}
                  >
                    Guardar
                  </button>
                </form>
              </div>

              <div className="col-md-6">
                <h1>Hola</h1>
                <br/>
                <Avatar alt="Remy Sharp" src={usuario.photoURL}/>
                <label className="negrita"> {usuario.displayName}</label>
                
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default usuario;
