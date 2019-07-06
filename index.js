import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema'
const app = express();

app.get('/', (req, res) => {
  res.send('Todo bien')
});

const root = {hola: () => "Hola mundo"}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(7000, () => console.log('Servidor encendido'));