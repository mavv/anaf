const { ApolloServer, gql } = require('apollo-server');
const { sortBy, find } = require('lodash');

const events = require('../api/events.json');
const cities = require('../api/cities.json');

if (typeof localStorage === 'undefined' || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

const typeDefs = gql`
  scalar DateTime

  # Cities in wich events take place
  type City {
    id: ID!
    name: String
  }

  # Tech event
  type Event {
    id: ID!
    isFree: Boolean
    name: String
    city: City
    startDate: DateTime
    endDate: DateTime
  }

  #Query
  type Query {
    cities: [City!]!
    city(id: ID!): City
    events: [Event!]!
    event(id: ID!): Event
  }

  #Mutation
  type Mutation {
    saveEvent(id: ID!): Event
  }
`;

const resolvers = {
  Query: {
    cities: () => cities,
    city: (_, { id }) => find(cities, { id: parseInt(id) }),
    events: () => {
      const sorted = sortBy(events, 'startDate');
      return sorted;
    },
    event: (_, { id }) => find(events, { id: parseInt(id) })
  },
  Event: {
    city: event => find(cities, { id: event.city })
  },
  Mutation: {
    saveEvent: async (_, { id }) => {
      console.log('saving event?!', id);
      const myEvents = localStorage.getItem('myEvents')
        ? localStorage.getItem('myEvents')
        : [];

      myEvents.push(find(events, { id: parseInt(id) }));
      localStorage.setItem('myEvents', JSON.stringify(myEvents));

      console.log('saved ?', JSON.parse(localStorage.getItem('myEvents')));
    }
  }
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
