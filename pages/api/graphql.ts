// for secrets

import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../utils/data'


const apolloServer = new ApolloServer({ schema })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })

// //https://www.youtube.com/watch?v=n_LcVqqHSY8

// import { ApolloServer } from 'apollo-server-micro'
// import { schema } from '../../utils/data/schema'

// const apolloServer = new ApolloServer({ schema })

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// export default apolloServer.createHandler({ path: '/api/graphql' })