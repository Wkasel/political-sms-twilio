import Twilio from 'twilio';
// There is a bug with next in env vars or with twilio somehow it crashes if i use vars -- change these keys
const client = Twilio(
    // process.env.TWILIO_ACCOUNT_SID,
    "ACc24bc9491d4a5bb6f59fe8b2fa5dd4a0",
    // process.env.TWILIO_AUTH_TOKEN,
    "b1dbf6151b607d2d4425b13b131242ed",
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
                from: '+15102889800',
                to,
                body
            }).then((res) => console.log(JSON.stringify(res)))
        res.end(JSON.stringify(results))
    }
}