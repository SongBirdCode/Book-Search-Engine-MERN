const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const { ApolloServer } = require('apollo-server-express')
// const { typeDefs, resolvers } = require()
// const { authMiddleware } = require

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, '../client/build/index.html'));
})

// Apollo server instance with GraphQL schema added
const startApolloserver = async (TypeDefs, resolvers) => (
  await server.start();
  server.applyMiddleware({ app });
)

// indicate PORT(S) 

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log('Use GraphQL @ http://localhost:${PORT}${server.graphqlPath}');
  });

  // async function call in order to start the server
  startApolloserver(TypeDefs, resolvers);
