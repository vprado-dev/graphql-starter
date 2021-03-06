import dotenv from 'dotenv-safe';

dotenv.config();

import express from 'express';
import cors from 'cors';
import { readdirSync } from 'fs';
import { join } from 'path';
import { notFound } from './middlewares/notFound';
import { exception } from './middlewares/exception';
import { ApolloServer } from 'apollo-server-express';
import { connect } from '@ev-fns/mongo';
import mongoose from 'mongoose';

const typeDefsFiles = readdirSync(join(__dirname, 'typeDefs'));
const typeDefs = [];

for (const file of typeDefsFiles) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  typeDefs.push(require(join(__dirname, 'typeDefs', file)).typeDefs);
}

const resolversFiles = readdirSync(join(__dirname, 'resolvers'));
const resolvers = [];

for (const file of resolversFiles) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  resolvers.push(require(join(__dirname, 'resolvers', file)).resolvers);
}

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(cors());

(async () => {
  await connect(mongoose, {
    protocol: process.env.MONGODB_PROTOCOL,
    server: process.env.MONGODB_SERVER,
    port: +(process.env.MONGODB_PORT || 27017),
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
  } as any);
  await server.start();
  server.applyMiddleware({ app });

  app.use(exception);

  app.use(notFound);

  app.listen(process.env.PORT, () =>
    console.log(`Listening at http://localhost:${process.env.PORT}`),
  );
})();
