import mysql from 'mysql'
import logger from './logger'


export type ExecuteUpdateModel = {
    affectedRows: number;
    insertId?: number;
}
export type RowData = { [key: string]: number | boolean | string }

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

function convertRowDataToObject(rows: any) {
    return JSON.parse(JSON.stringify(rows))
}

export default {
    selectList<T>(sql: string, ...params: any[]) {
        return new Promise<T>((resolve, reject) => {
            pool.query(sql, params, (err, result, faileds) => {
                if (err) {
                    logger.info('database query error',err.message)
                    reject(Error('database query error:'+ err.message))
                } else {
                    resolve(
                        convertRowDataToObject(result)
                    )
                }

            })
        })
    },
    selectOne<T>(sql: string, ...params: any[]) {
        return new Promise<T>((resolve, reject) => {
            const q = pool.query(sql, params, (err, result, faileds) => {
                if (err) {
                    logger.info('database query error',err.message)
                    reject(Error('database query error'))
                } else {
                    if (result.length != 1) {
                        resolve(null)
                    } else {
                        resolve(
                            convertRowDataToObject(result[0])
                        )
                    }
                }

            })
            logger.debug('[QUERY]', q.sql)
        })
    },
    insertOne(tableName: string, rowData: any) {
        return new Promise<ExecuteUpdateModel>((resolve, reject) => {
            const q = pool.query(`INSERT INTO ${tableName} set ?`, rowData, (err, result) => {
                if (err) {
                    logger.info('database execute error',err.message)
                    reject(Error('database execute error:' + err.message))
                } else {
                    resolve({
                        affectedRows: result.affectedRows,
                        insertId: result.insertId || 0
                    })
                }
            })
            logger.debug('[INSERT]', q.sql,typeof(rowData),JSON.stringify(rowData))
        })
    },
    execute(sql: string, ...params: any[]) {
        return new Promise<ExecuteUpdateModel>((resolve, reject) => {
            const q = pool.query(sql, params, (err, result, faileds) => {
                if (err) {
                    logger.info('database query error',err.message)
                    reject(Error('database query error'))
                } else {
                    resolve({
                        affectedRows: result.affectedRows,
                        insertId: result.insertId || 0
                    })
                }
            })
            logger.debug('[EXECUTE]', q.sql)
        })
    }
}
