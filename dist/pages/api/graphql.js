"use strict";
// for secrets
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const apollo_server_micro_1 = require("apollo-server-micro");
// import { makeExecutableSchema } from 'graphql-tools'
// this is a hack - bug report for next.js
// https://github.com/vercel/next.js/issues/11377
// @ts-ignore
// import { schema } from '../../utils/data/schema'
const typedefs_1 = require("../../utils/data/typedefs");
const resolvers_1 = require("../../utils/data/resolvers");
const apolloServer = new apollo_server_micro_1.ApolloServer({ typeDefs: typedefs_1.typeDefs, resolvers: resolvers_1.resolvers });
// const apolloServer = new ApolloServer({
//   schema,
//   context(ctx) {
//     return ctx
//   },
// })
exports.config = {
    api: {
        bodyParser: false,
    },
};
exports.default = apolloServer.createHandler({ path: '/api/graphql' });
//# sourceMappingURL=graphql.js.map