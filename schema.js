const { gql } = require('apollo-server');
// export default gql`
//     type Query {
//         hi: String
//     } 
// `
const typeDefs = gql`
    type User {
        id: Int!
        username: String!
        email: String!
        password: String
        teams: [Team!]!
    }

    type Channel {
        id: Int!
        name: String!
        public: Boolean!
        messages: [Message!]!
        team: Team!
        user: [User!]!
    }

    type Message {
        id: Int!
        text: String!
        user: User!
        channel: Channel!
    }

    type Team {
        owner: User!
        members: [User!]!
        channels: [Channel!]!
    }

    type Query {
        getUser(id: Int!): User!
        allUsers(id: Int!): [User!]!
        hi: String
    }
    type Mutation {
        createUser (username: String!, email: String!, password: String!): User!
    }

`
module.exports = typeDefs;