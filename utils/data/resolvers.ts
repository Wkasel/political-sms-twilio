// @ts-nocheck


import { sendSMS } from './SendSMS';

export const resolvers = {
    Query: {
        ping(parent, args, context) {
            return [{ name: 'pong' }]
        },
        getData(parent, args, context) {
            return;
        }
    },
    Mutation: {
        sendSMS: async (parent, { to, body }, context) => {
            console.log({ context })
            await sendSMS(to, body)
        },
        stubSMS: async ({ }, { id, first_name, middle_name, last_name, phone }, { }) => {
            console.log({ id, first_name, middle_name, last_name, phone });
            return { id, first_name, middle_name, last_name, phone }
        }
    }
}