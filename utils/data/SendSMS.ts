// import Twilio from 'twilio';
// // There is a bug with next in env vars or with twilio somehow it crashes if i use vars -- change these keys
// const client = Twilio(
//     // process.env.TWILIO_ACCOUNT_SID,
//     "ACc24bc9491d4a5bb6f59fe8b2fa5dd4a0",
//     // process.env.TWILIO_AUTH_TOKEN,
//     "c0f66483e325dfeb24b6c934e40cccb3",
//     { lazyLoading: true }
// );

// export const sendSMS = async (to, body) => {
//     try {
//         return client.messages
//             .create({
//                 from: '+15102889800',
//                 to,
//                 body
//             }).then((res) => console.log({ res }))
//     } catch (e) {
//         console.log("ERROR", e)
//     }
// }