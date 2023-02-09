import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from 'antd'
import styles from "./../../styles/Home.module.scss";

export async function fetchArticle(id) {
  // 调用外部 API 获取博文列表
  const res = await fetch(`/api/article/${id}`);
  const data = await res.json();
  return data;
}
export default function Detail() {
  const router = useRouter();
  const [article, setArticle] = useState();
  useEffect(() => {
    if (router.query.id) {
      fetchArticle(router.query.id).then((art) => setArticle(art));
    }
  }, [router.query]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div>
          <Button onClick={router.back}>Back</Button>
        </div>
        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>{JSON.stringify(article)}</div>
      </main>

      <footer>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
