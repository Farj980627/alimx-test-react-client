import { gql } from 'apollo-boost';
export const GET_DATA = gql`
  {
    getUsers {
      name
      secondName
      fatherSurname
      motherSurname
      bornDate
      email
      cellphone
    }
  }
`;

export const ADD_DATA = 
    gql`
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
