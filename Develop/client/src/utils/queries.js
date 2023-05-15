import { gql } from '@apollo/client';

export const QUERY_USER = gql `
query me {
        me {
          _id
          bookCount
          email
            username
          savedBooks {
            title
            link
            image
            description
            bookId
            authors
          }
        }
      }`;