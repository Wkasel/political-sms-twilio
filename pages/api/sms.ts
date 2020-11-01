import Twilio from 'twilio';
import Template from 'es6-dynamic-template';
// There is a bug with next in env vars or with twilio somehow it crashes if i use vars -- change these keys
const client = Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN,
    { lazyLoading: true }
);



export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            // console.log({ req, res })
            res.code = 200;
            res.setHeader('Content-Type', "application/json");
            const { to, body, user } = req.body

            if (to !== "" || to !== null || to !== undefined) {

                const results = await client.messages
                    .create({
                        from: process.env.TWILIO_PHONE_NUMBER,
                        to,
                        body: Template(body, user)
                    }).then((res) => console.log(JSON.stringify(res)))
                res.end(JSON.stringify(results))
                return res;
            } else {
                res.code = 200
                res.end(JSON.stringify({ status: "blank, did not send" }))
                return res
            }

        } else {
            return res;
        }
    } catch (e) {
        // suppress errors
        res.code = 200;
        return res;
    }
}