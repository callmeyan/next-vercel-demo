import Head from "next/head";
import Link from "next/link";
import styles from "./../styles/Home.module.scss";
import {selectAll} from "../service/article";
import React from "react";
import ArticleModel from "../service/models/ArticleModel";
import ArticleList from "../components/ArticleList";

export async function getServerSideProps() {
    // 调用外部 API 获取博文列表
    const articles = await selectAll()


    // 通过返回 { props: { posts } } 对象，Blog 组件
    // 在构建时将接收到 `posts` 参数
    return {
        props: {
            articles,
        },
    };
}

const Home: React.FC<{ articles: ArticleModel[] }> = ({articles}) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Next Blog Demo</title>
                <meta name="keywords" content="react, next, blog, demo"/>
                <meta name="description" content="Next Blog Demo"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="container">
                <ArticleList articles={articles}/>
            </main>
        </div>
    );
}

export default Home;
