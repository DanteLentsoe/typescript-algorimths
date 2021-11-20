import type { NextPage } from "next";
import Head from "next/head";
import Sorting from "../algorithms/sorting";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Algo Dojo</title>
        <meta
          name="description"
          content="Algo Dojo is a series by Dante Lentsoe, to teach you coding alogrithms and data structures"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Algo{" "}
          <a href="https://github.com/dantelentsoe/typescript-algorimths">
            Dojo
          </a>
        </h1>

        <p className={styles.description}>
          Outside of the misspelled repo name I will try and get you a step up
          in your data structures and algorimths game
        </p>
        <p>
          Check the <code className={styles.code}>console.log</code>
        </p>
      </main>
      <Sorting />

      <footer className={styles.footer}>
        <a
          href="https://dantelentsoe.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by <span className={styles.logo}>Dante </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
