import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useRef, useEffect } from "react";

export default function Homepage() {
  // inntersection observer start
  const targets = useRef([]);
  const addToTargets = (el: never) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el);
    }
  };
  const options = {
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        }
      });
    }, options);
    targets.current.forEach((target) => {
      observer.observe(target);
    });
  }, [targets]);
  // inntersection observer end

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
      {/*
            websites
            */}
      <a id="website" className={styles.jump_margin}></a>
      <div
        ref={addToTargets}
        className={`${styles.container} ${styles.appear}`}
      >
        {/* <div className={`${styles.container}`}> */}
        <h2>Websites</h2>
        <p className={styles.comment}>私が作成した、ウェブサイトの紹介です。</p>
        <div className={`${styles.wrapper} ${styles.websites_wrapper}`}>
          {/* 
            ザ・ブルースカイキャンプ場
            */}
          <div
            ref={addToTargets}
            className={`${styles.blueSky} ${styles.appear}`}
          >
            <a
              href="https://homepage-blue-sky-camping.vercel.app/"
              target="_blank"
            >
              <h3>ザ・ブルースカイキャンプ場</h3>
              <p className={styles.url_p}>
                url: https://homepage-blue-sky-camping.vercel.app/
              </p>
            </a>
            <hr />
            <a href="git@github.com:ryotaro-0805/portfolio.git" target="_blank">
              <p className={styles.code_p}>
                code: git@github.com:ryotaro-0805/portfolio.git
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>
              『本格的なホームページ作成』をテーマにHTML,CSS,JavaScriptで作成しております。
            </p>
            <p>
              SEO対策も施しているため架空のサイトですが、検索エンジンでの順位は上位となっています。
            </p>
          </div>
          {/* 
            ザ・サンパツヤ
            */}
          <div
            ref={addToTargets}
            className={`${styles.sanpatuya} ${styles.appear}`}
          >
            <a
              href="https://xs622417.xsrv.jp/homepage_test/index.html"
              target="_blank"
            >
              <h3>ザ・サンパツヤ</h3>
              <p className={styles.url_p}>
                url: https://xs622417.xsrv.jp/homepage_test/index.html
              </p>
            </a>
            <hr />
            <a href="https://github.com/ryotaro-0805/sanpatuya" target="_blank">
              <p className={styles.code_p}>
                code: https://github.com/ryotaro-0805/sanpatuya
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>
              『キュート』、『親しみ』をテーマにHTML,CSS,JavaScriptで作成しております。
            </p>
            <p>
              SEO対策も施しているため架空のショップサイトですが、検索エンジンでの順位は上位となっています。
            </p>
          </div>
          {/* 
            環境開発株式会社
            */}
          <div
            ref={addToTargets}
            className={`${styles.kankyo} ${styles.appear}`}
          >
            <a href="https://homepage-kankyokaihatu.vercel.app" target="_blank">
              <h3>環境開発株式会社</h3>
              <p className={styles.url_p}>
                url: https://homepage-kankyokaihatu.vercel.app/
              </p>
            </a>
            <hr />
            <a
              href="https://github.com/ryotaro-0805/homepage-kankyokaihatu"
              target="_blank"
            >
              <p className={styles.code_p}>
                code: https://github.com/ryotaro-0805/homepage-kankyokaihatu
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>『環境』、『ビジネス』をテーマにNext.jsで作成しております。</p>
            <p></p>
          </div>
          {/* 
            瀬戸珈琲
             */}
          <div ref={addToTargets} className={`${styles.seto} ${styles.appear}`}>
            <a href="https://seto-cafe-homepage.vercel.app/" target="_blank">
              <h3>瀬戸珈琲</h3>
              <p className={styles.url_p}>
                url: https://seto-cafe-homepage.vercel.app/
              </p>
            </a>
            <hr />
            <a
              href="https://github.com/ryotaro-0805/seto-cafe-homepage"
              target="_blank"
            >
              <p className={styles.code_p}>
                code: https://github.com/ryotaro-0805/seto-cafe-homepage
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>
              『シック』、『愛情』をテーマにHTML,CSS,JavaScriptで作成しております。
            </p>
            <p>
              知人が珈琲の焙煎が趣味だったので、ビジネスにする場合の参考サイトとして制作しました。
            </p>
            <p>
              SEO対策も施しているため、架空のショップサイトですが検索エンジンでの順位は上位となっています。
            </p>
          </div>
        </div>
      </div>
      {/*
            websitesここまで
            */}
    </>
  );
}
