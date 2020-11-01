import Twilio from 'twilio';
// There is a bug with next in env vars or with twilio somehow it crashes if i use vars -- change these keys
const client = Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    { lazyLoading: true }
);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log({ req, res })
        res.code = 200;
        res.setHeader('Content-Type', "application/jsoin");
        const { to, body } = req.body
        const results = await client.messages
            .create({
                from: process.env.TWILIO_PHONE_NUMBER,
                to,
                body
            }).then((res) => console.log(JSON.stringify(res)))
        res.end(JSON.stringify(results))
    }
}