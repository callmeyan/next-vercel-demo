import Head from "next/head";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import styles from "./../../styles/Home.module.scss";
import {selectOneById} from "../../service/article";
import ArticleModel from "../../service/models/ArticleModel";
import logger from "../../service/logger";


export async function getServerSideProps({params}) {
    const id = Number(params.id);
    const article = await selectOneById(id)

    // 通过返回 { props: { posts } } 对象，Blog 组件
    // 在构建时将接收到 `posts` 参数
    return article ? {
        props: {article}
    } : {notFound: true};
}

const ArticleDetail: React.FC<{
    article: ArticleModel
}> = ({article}) => {
    const router = useRouter();
    useEffect(() => {

    }, [router.query]);

    return (
        <div className={styles.container}>
            <Head>
                <title>{article.title}</title>
                <meta name="keywords" content={article.keyword}/>
                <meta name="description" content={article.description}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.detailPage}>
                <section className="container">
                    <article className={styles.articleContent}>
                        <h1 className={styles.title}>{article.title}</h1>
                        <div className={styles.contentContainer} dangerouslySetInnerHTML={{
                            __html: article.content
                        }}></div>
                    </article>
                </section>
            </main>
        </div>
    );
}
export default ArticleDetail
