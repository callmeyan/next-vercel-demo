export default interface ArticleModel {
    id?: number;
    title: string;
    content: string;
    keyword?: string;
    description?: string;
    alias?: string;
    word_count?: number;
    cover?: string;
    like?: number;
    views?: number;
    comments?: number;
    uid: number;
    password?: string;
    create_time?: string;
    modify_time?: string;
    state?: number;
}
