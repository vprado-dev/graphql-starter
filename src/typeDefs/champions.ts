import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  extend type Query {
    allChampions: [Champion!]!
    champion(input: ChampionInput): Champion
  }

  extend type Mutation {
    createChampion(input: CreateChampionInput): Champion!
  }

  type Champion {
    ID: ID!
    name: String!
  }

  input ChampionInput {
    ID: ID!
  }

  input CreateChampionInput {
    name: String!
  }
`;
