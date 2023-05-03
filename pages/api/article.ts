import {NextApiRequest, NextApiResponse} from "next";
import logger from "../../service/logger";
import {create} from "../../service/article";
import {responseSuccess, wrapperResponseError} from "../../service/api-util";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method.toLowerCase() === 'post') {
        create(JSON.parse(req.body)).then((ret) => responseSuccess(res, ret)).catch(e => wrapperResponseError(res, e))
        return;
    }
    res.end(JSON.stringify({
        code: 0,
        message: 'sxx'
    }))
}
