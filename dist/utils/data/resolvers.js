"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// import { sendSMS } from './SendSMS';
exports.resolvers = {
    Query: {
        ping(parent, args, context) {
            return [{ name: 'pong' }];
        },
        getData(parent, args, context) {
            return;
        }
    },
    Mutation: {
        sendSMS: async (parent, { to, body }, context) => {
            console.log({ context });
            // await sendSMS(to, body)
        },
        stubSMS: async ({}, { id, first_name, middle_name, last_name, phone }, {}) => {
            console.log({ id, first_name, middle_name, last_name, phone });
            return { id, first_name, middle_name, last_name, phone };
        }
    }
};
//# sourceMappingURL=resolvers.js.map