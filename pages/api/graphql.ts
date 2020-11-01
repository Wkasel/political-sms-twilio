// for secrets







import { ApolloServer } from 'apollo-server-micro'

// import { makeExecutableSchema } from 'graphql-tools'

// this is a hack - bug report for next.js
// https://github.com/vercel/next.js/issues/11377
// @ts-ignore
// import { schema } from '../../utils/data/schema'
import { typeDefs } from '../../utils/data/typedefs';
import { resolvers } from '../../utils/data/resolvers';



const apolloServer = new ApolloServer({ typeDefs, resolvers })
// const apolloServer = new ApolloServer({
//   schema,
//   context(ctx) {
//     return ctx
//   },
// })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })

