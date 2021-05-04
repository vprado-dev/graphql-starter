import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  extend type Query {
    hello: String
  }
`;
