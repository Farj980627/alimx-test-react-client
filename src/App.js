import React from "react";
import "./App.css";
import FullForm from "./components/formComp";
import { useQuery } from "@apollo/react-hooks";
import { GET_DATA } from "./query/index";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

function App() {
  const getAllUsers = useQuery(GET_DATA);
  const ADD_DATA = gql`
    mutation CreateData(
      $name: String
      $secondName: String
      $fatherSurname: String
      $motherSurname: String
      $bornDate: String
      $email: String
      $cellphone: String
    ) {
      createData(
        name: $name
        secondName: $secondName
        fatherSurname: $fatherSurname
        motherSurname: $motherSurname
        bornDate: $bornDate
        email: $email
        cellphone: $cellphone
      )
    }
  `;
  const [createData, { data }] = useMutation(ADD_DATA);
  if (getAllUsers.loading) return <p>Algo hace </p>;
  if (getAllUsers.error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="App ">
      <div className="container mx-auto">
        <FullForm />
        <div className="container col-md-6 col-lg-4 pb-3 justify-content-center align-items-center h-100">
          <div className="card-transparent ">
            <p className="card-text">
              Si tus datos son correctos por favor continuemos
            </p>
          </div>
          <div >
            <button
              className="btn btn-success btn-lg btn-block"
              onClick={(e) => {
                e.preventDefault();
                createData({
                  variables: {
                    name: sessionStorage.getItem("name"),
                    secondName: sessionStorage.getItem("secondName"),
                    fatherSurname: sessionStorage.getItem("fatherSurname"),
                    motherSurname: sessionStorage.getItem("motherSurname"),
                    bornDate: sessionStorage.getItem("bornDate"),
                    email: sessionStorage.getItem("email"),
                    cellphone: sessionStorage.getItem("cellphone"),
                  },
                });
                console.log("ya le pique");
              }}
            >
              Iniciar
            </button><br/>
          </div>
          <div className="form-container bgcard ">
            <ul class="list-group bg-transparent">
              <li class="list-group-item bg-transparent">
                Fecha de nacimiento: {sessionStorage.getItem("bornDate")}
              </li>
              <li class="list-group-item bg-transparent">
                Correo electrónico: {sessionStorage.getItem("email")}
              </li>
              <li class="list-group-item bg-transparent">
                Teléfono celular: {sessionStorage.getItem("cellphone")}
              </li>
              <li class="list-group-item bg-transparent">
                Nombre: {sessionStorage.getItem("name")}{" "}
                {sessionStorage.getItem("secondName")}{" "}
                {sessionStorage.getItem("fatherSurname")}{" "}
                {sessionStorage.getItem("motherSurname")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
