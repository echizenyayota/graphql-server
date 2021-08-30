const {ApolloSerber, PubSub, ApolloServer} = require('apollo-server');
const db = require('./db')
const Query = require('./resolever/Query')
const Mutation = require('./resolever/Mutation')
const Subscription = require('./resolver/Subscription')
const typeDefs = require('./schema')

// Pubsubのインスタンスを作成, サブスクリプションが利用可能
const pubsub = new PubSub()

const server = new ApolloServer({
  typeDefs: typeDefs, 
  resolvers: {
    Query, 
    Mutation, 
    Subscription,
  },
  context: {
    db,
    pubsub
  }
})

server.listen.then(({url, subscription }) => {
  console.log(`Server ready at ${url}`);
  console.log(`Subscription ready at ${subscriptionURL}`);
});