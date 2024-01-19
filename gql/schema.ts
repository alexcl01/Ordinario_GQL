export const typeDefs = `#graphql
    type Contact {
        id: ID!
        nameAndLastNames: String!
        phoneNumber: String!
        country: String!
        hourCountry: String!
    }

    type Query {
        contacts: [Contact!]!
        contact: (id: ID!): Contact!
    }

    type Mutation {
        addContact(nameAndLastNames: String!, phoneNumber: String!): Contact!
        getContact(id: ID!): Contact!
        getContacts: [Contact!]!
        deleteContact(id: ID!): Boolean!
        updateContact(id: ID!, nameAndLastNames: String!, phoneNumber: String!): Contact!
    }
`;
