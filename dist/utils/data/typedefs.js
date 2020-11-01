"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
// import { gql } from 'apollo-server-micro'
const client_1 = require("@apollo/client");
exports.typeDefs = client_1.gql `
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
`;
//# sourceMappingURL=typedefs.js.map