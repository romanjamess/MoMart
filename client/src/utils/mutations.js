import { gql } from '@apollo/client';


export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      firstName
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      firstName
    }
  }
}
`
export const ADD_ORDER= gql `
mutation addOrder($products: [ID]!) {
  addOrder(products: $products) {
    _id
    products {
      name
      quantity
      price
      image
    }
  }
}
`

export const UPDATE_USER = gql `
mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String) {
  updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    _id
    email
    firstName
    lastName
  }
}
`

