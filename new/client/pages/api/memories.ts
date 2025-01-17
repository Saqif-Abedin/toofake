import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let authorization_token = req.body.token;
    console.log("me");
    console.log(authorization_token);
    let headers = {
        "authorization": "Bearer " + authorization_token,
    }
    return axios.request({
        url: "https://mobile.bereal.com/api" + "/feeds/memories",
        method: "GET",
        headers: headers,
    }).then(
        (response) => {
            console.log("------------------")
            console.log("request memories success");
            console.log(response.data);
            console.log("------------------")
            
            res.status(200).json(response.data);
        }
    ).catch(
        (error) => {
            console.log(error);
            res.status(400).json({ status: "error" });
        }
    )
}