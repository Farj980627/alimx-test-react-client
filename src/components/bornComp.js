import React, { Component } from "react";
import avatar from "../assets/avatar.png";
import "./cards.css";

export class bornComp extends Component {
  render() {
    const { values, iChange } = this.props;

    return (
      <div className="form-container card-transparent text-center">
       
        <h1 className="mb-5">¿Cuál es tu fecha de nacimiento?</h1>
        <div class="custom-avatar">
          <img src={avatar} alt="Avatar" className="mr-3 rounded-circle " />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Dia"
            className="form-control"
            name="bornDay"
            onChange={iChange("bornDay")}
            value={values.bornDay}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="text"
            placeholder="Mes"
            className="form-control"
            name="bornMonth"
            onChange={iChange("bornMonth")}
            value={values.bornMonth}
          />
        </div>
        <br />
        <div className="form-group">
          <input
            type="number"
            placeholder="Año"
            className="form-control"
            name="bornYear"
            onChange={iChange("bornYear")}
            value={values.bornYear}
          />
        </div>
        <br />

        <div className="card resultCard">
          <div className="card-body">
            <p>
              {values.bornDay} {values.bornMonth} {values.bornYear}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default bornComp;
