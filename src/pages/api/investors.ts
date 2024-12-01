import type {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";


export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    const locale = req.query.locale || 'en';

    try {
        const response = await axios(`/api/${locale}/investors-content/1`);
        if (response.status === 200) {
            res.status(200).json(response.data);
        } else {
            res.status(response.status).json({ error: 'Failed to fetch data' });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.log({error});
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
