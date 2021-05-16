import React, { Component } from "react";
import avatar2 from "../assets/avatar.png";
import "./cards.css";
export class contactComp extends Component {
  render() {
    const { values, iChange } = this.props;

    return (
      <div className="form-container card-transparent text-center">
        <h1 className="mb-5">Datos de contacto</h1>
        <div class="custom-avatar">
          <img src={avatar2} alt="Avatar" className="mr-3 rounded-circle  " />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="form-control"
            name="email"
            onChange={iChange("email")}
            value={values.email}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="number"
            placeholder="Teléfono celular"
            className="form-control"
            name="cellphone"
            onChange={iChange("cellphone")}
            value={values.cellphone}
          />
        </div>
        <br />
        <div className="card resultCard text-left">
          <div className="card-body">
            <p>
              Correo electrónico: {values.email} <br /> Teléfono celular:{" "}
              {values.cellphone}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default contactComp;
