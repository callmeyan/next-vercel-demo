import {NextApiResponse} from "next";

export function responseSuccess(res: NextApiResponse, data?: any) {
    return res.end(JSON.stringify({
        code: 0,
        message: 'success',
        data
    }))
}

export function responseError(res: NextApiResponse, code: number, message: string = 'error', data?: any) {
    return res.end(JSON.stringify({
                code,
                message,
                data
            }
        )
    )
}

export function wrapperResponseError(res: NextApiResponse, err: Error, data?: any) {
    return res.end(JSON.stringify({
                code: 500,
                message: err?.message || 'server error',
                data
            }
        )
    )
}
