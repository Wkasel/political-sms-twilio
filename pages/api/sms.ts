// for secrets
require('dotenv');

import { ApolloServer, gql } from 'apollo-server-micro'
import Twilio from 'twilio';
const client = Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)


const typeDefs = gql`
  type Query {
    ping: Status!
  }
  type Status {
    name: String
  }
`

const resolvers = {
  Query: {
    ping(parent, args, context) {
      return [{ status: 'pong' }]
    },
  },
  Mutation: {
    sendSMS: async ({ to, body }, context) => {
      try {
        client.messages
          .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to,
            body,
          })
      } catch (e) {
        console.error('error sending SMS')
      }
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })