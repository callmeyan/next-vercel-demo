import db from "./db";
import ArticleModel from "./models/ArticleModel";

export async function selectAll() {
    const list = await db.selectList<ArticleModel[]>('select * from article');
    return list;
}

export async function selectOneById(id: number) {
    const list = await db.selectOne<ArticleModel>('select * from article where id=?', id);
    return list;
}

export async function create(data: ArticleModel) {
    if (!data.uid) {
        data.uid = 0;
    }
    return await db.insertOne('article', data);
}
