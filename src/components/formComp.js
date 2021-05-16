import React, { Component } from "react";

import NameComp from "./nameComp";
import ContactComp from "./contactComp";
import BornComp from "./bornComp";

export class formComp extends Component {
  state = {
    name: "",
    secondName: "",
    fatherSurname: "",
    motherSurname: "",
    bornDay: "",
    bornMonth: "",
    bornYear: "",
    email: "",
    cellphone: "",
  };

  iChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      name,
      secondName,
      fatherSurname,
      motherSurname,
      bornDay,
      bornMonth,
      bornYear,
      email,
      cellphone,
    } = this.state;
    const values = {
      name,
      secondName,
      fatherSurname,
      motherSurname,
      bornDay,
      bornMonth,
      bornYear,
      email,
      cellphone,
    };
    sessionStorage.setItem("name", values.name);
    sessionStorage.setItem("secondName", values.secondName);
    sessionStorage.setItem("fatherSurname", values.fatherSurname);
    sessionStorage.setItem("motherSurname", values.motherSurname);
    sessionStorage.setItem(
      "bornDate",
      values.bornDay + " " + values.bornMonth + " " + values.bornYear
    );
    sessionStorage.setItem("email", values.email);
    sessionStorage.setItem("cellphone", values.cellphone);

    return (
      <div className="container col-md-6 col-lg-4 pb-3 justify-content-center align-items-center h-100">
        <NameComp iChange={this.iChange} values={values} />

        <BornComp iChange={this.iChange} values={values} />

        <ContactComp iChange={this.iChange} values={values} />
      </div>
    );
  }
}

export default formComp;
