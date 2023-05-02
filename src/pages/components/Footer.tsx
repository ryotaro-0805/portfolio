import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Footer() {
  return (
    <>
      <Head>
        <title>
          フロントエンドエンジニア Ryotaro のポートフォリオサイトです。
        </title>
        <meta
          name="description"
          content="フロントエンドエンジニア Ryotaro のポートフォリオサイト"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </Head>
      <footer className={styles.footer}>
        <h3>
          <span
            style={{ marginRight: "5px", verticalAlign: "-5px" }}
            className="material-symbols-outlined"
          >
            potted_plant
          </span>
          This page is created by Ryotaro
          <br />
          Copyright © 2023 Ryotaro's Portfolio All Rights Resarved.
        </h3>
      </footer>
    </>
  );
}
