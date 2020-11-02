import express from 'express';
// import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers, mergeType } = require('@graphql-tools/merge');

/* Single Schma and resolver */
// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');

/* 
To Merge all the schema file.

const typeDefsNew = mergeType(loadFilesSync(path.join(__dirname, './schema')));
OR  */
const typeDefs = mergeTypeDefs(loadFilesSync(path.join(__dirname, './schema')));
/* 
    To Merge all the resolver file.
 */
const resolvers = mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers')));


/* // To start a apollo-server with out express 
 import { ApolloServer } from 'apollo-server';
 const server = new ApolloServer({ 
     typeDefs ,
     resolvers:resolvers,
     playground:{ 
        endpoint: `http://localhost:4000/graphql`,
        settings: {
          'editor.theme': 'light'
        }
     } 
    });
//  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }))
//  app.listen(4000);
 server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});  */




// import db from './models'; 
import models from './models';

// db.sequelize.sync({ force:true });

// db.user.create({username:"sankar",email:"sankar.martha@gmail.com",password:"abcd"});
// console.log(db.user.findAll())


const PORT = 5000 || process.env;
const endpoint = '/api/graphql';
// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
const app = express();

const SERVER = new ApolloServer({ 
    typeDefs ,
    resolvers:resolvers,
    context: {
        models,
        user: {
            id:1
        }
    },
    playground:{ 
        settings: {
            'editor.theme': 'dark','editor.fontSize': 14,
        }
    } ,
    tabs: [
        {
          endpoint,
        //   query: defaultQuery,
        },
      ],
    introspection: true,
    playground: true,
});
SERVER.applyMiddleware({
    app,
    // path: '/specialUrl'
});


app.listen(PORT, () => {
    console.log(`The server has started on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/graphql`);
});