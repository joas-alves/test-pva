import type {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";


export default async function handler(req: NextApiRequest, res: NextApiResponse,) {
    const locale = req.query.locale || 'en';
    const id = req.query?.id;

    if (req.method === "GET") {
        try {
            if (id) {
                const response = await axios.get(`/api/${locale}/service-content/${id}`);
                if (response.status === 200) {
                    return res.status(200).json(response.data);
                }
            } else {
                const response = await axios.get(`/api/${locale}/service-contents`);
                if (response.status === 200) {
                    return res.status(200).json(response.data);
                }
            }

            return res.status(404).json({ error: "Route not found" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
