// import { gql } from 'apollo-server-micro'
import { gql } from '@apollo/client'



export const typeDefs = gql`
  type Query {
    ping: Status!
    getData: String!
  }
  type Mutation {
    sendSMS(to:String,body:String): String
    stubSMS(id:String,first_name:String,middle_name:String,last_name:String,phone_home:String): String
  }
  type Status {
    name: String
  }
  type Data {
    test:String
  }
`