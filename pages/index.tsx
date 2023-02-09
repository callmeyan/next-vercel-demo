import Head from "next/head";
import Link from "next/link";
import styles from "./../styles/Home.module.scss";
import { Row, Col } from "antd";

export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch("http://localhost:3000/api/article");
  const data = await res.json();

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <span className="color-blue">MyBlog</span>!
        </h1>
        <Row gutter={[20, 20]} className={styles.contentContainer}>
          <Col span={8}>
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Server Render &rarr;</h3>
              <p>{JSON.stringify(data)}</p>
            </a>
          </Col>
          <Col span={8}>
            <Link href="/article/1" className={styles.card}>
              <h3>Demo&rarr;1</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </Link>
          </Col>
          <Col span={8}>
            <Link href="/article/2" className={styles.card}>
              <h3>Demo&rarr;2</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </Link>
          </Col>
          <Col span={8}>
            <Link href="/article/4" className={styles.card}>
              <h3>Demo&rarr;4</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </Link>
          </Col>
          <Col span={8}>
            <Link href="/article/3" className={styles.card}>
              <h3>Demo&rarr;3</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </Link>
          </Col>
        </Row>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
