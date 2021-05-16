import React, { Component } from "react";
import avatar from "../assets/avatar.png";
import "./cards.css";

export class nameComp extends Component {
  render() {
    const { values, iChange } = this.props;

    return (
      <div className="form-container card-transparent text-center  ">
        <div className="card resultCard">
          <div className="card-body ">           
              <h5>Ingreso de datos  <i class="bi bi-card-heading icon-lg"></i></h5>            
            
          </div>
          <div className="card-body">
            <h6>
              <i class="bi bi-alarm"></i> En menos de 5 minutos
            </h6>
          </div>
        </div>
        <h1 className="mb-5">¿Cuál es tu nombre?</h1>
        <div class="custom-avatar">
          <img src={avatar} alt="Avatar" className=" " />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            name="name"
            onChange={iChange("name")}
            value={values.name}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            placeholder="Segundo Nombre"
            className="form-control"
            name="secondName"
            onChange={iChange("secondName")}
            value={values.secondName}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            placeholder="Apellido"
            className="form-control"
            name="fatherSurname"
            onChange={iChange("fatherSurname")}
            value={values.fatherSurname}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            placeholder="Segundo Apellido"
            className="form-control"
            name="motherSurname"
            onChange={iChange("motherSurname")}
            value={values.motherSurname}
          />
        </div>
        <br />
        <div className="card resultCard ">
          <div className="card-body ">
            <p>
              {values.name} {values.secondName} {values.fatherSurname}{" "}
              {values.motherSurname}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default nameComp;
