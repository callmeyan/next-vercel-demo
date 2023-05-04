import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import ArticleModel from "../../service/models/ArticleModel";
import dayjs from "dayjs";

const CreateTime: React.FC<{ createTime?: string }> = ({createTime}) => {
    const time = dayjs(createTime);
    return <section className={styles.createTime}>
        <section className={styles.createTimerInner}>
            <section>{time.format('DD')}</section>
            <section>{time.format('YYYY-MM')}</section>
        </section>
    </section>
}

const ArticleList: React.FC<{
    articles: ArticleModel[]
}> = ({articles}) => {
    return <>
        {
            articles.map(art => <article className={styles.articleItemContainer} key={art.id}>
                <section className="flex">
                    <figure>
                        {art.cover && <img src={art.cover}/>}
                        {art.create_time && <CreateTime createTime={art.create_time}/>}
                    </figure>
                    <Link href={`/article/${art.id}`} className={styles.info}>
                        <h3>{art.title}</h3>
                        <p>{art.description}</p>
                    </Link>
                </section>
            </article>)
        }
    </>
}
export default ArticleList
