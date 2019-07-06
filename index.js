import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './data/schema';

const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Todo bien')
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))


app.listen(port, () => console.log(`Server on in port: ${port}`));