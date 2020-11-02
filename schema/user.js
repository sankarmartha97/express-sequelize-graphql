{/* <ChannelMergerNode className="js"></ChannelMergerNode> */}

import { gql } from 'apollo-server-express';
export default gql`
    type User {
        id: Int!
        username: String!
        email: String!
        password: String
        teams: [Team!]!
    }

    type Query {
        getUser(id: Int!): User!
        allUsers : [User!]!
        hi: String
    }

    type Mutation {
        createUser (username: String!, email: String!, password: String!): User!
    }
`;