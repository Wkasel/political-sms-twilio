
// @ts-nocheck

import Twilio from 'twilio';
// const client = Twilio(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN,
//     { lazyLoading: true }
// )
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    { lazyLoading: true }
)




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
            try {
                // return client.messages
                //     .create({
                //         from: '+15102889800',
                //         to,
                //         body
                //     })
                //     .then(message => console.log(message.sid));
            } catch (e) {
                console.error('error sending SMS')
            }
        },
        stubSMS: async ({ }, { id, first_name, middle_name, last_name, phone }, { }) => {
            console.log({ id, first_name, middle_name, last_name, phone });
            return { id, first_name, middle_name, last_name, phone }
        }
    }
}