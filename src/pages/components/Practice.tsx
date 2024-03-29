import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import styles from "@/styles/Practice.module.css";
import React, { useRef, useEffect } from "react";

export default function Practice() {
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
        practice
         */}
      <a id="practice" className={styles.jump_margin} href=""></a>
      <div
        ref={addToTargets}
        className={`${styles.container} ${styles.appear}`}
      >
        <h2>Practices</h2>
        <p className={styles.comment}>
          今までにコーディングの練習として作成したものを紹介しております。
        </p>
        <div className={`${styles.wrapper} ${styles.practices_wrapper}`}>
          {/* Swiper React */}
          <div
            ref={addToTargets}
            className={`${styles.appear} ${styles.inner_wrapper_practice}`}
          >
            <div className={styles.text_wrapper_practice}>
              <h3>Swiper React</h3>
              <p>Reactでホームページを作るときのSwiper導入のため作成しました。</p>
            </div>
            <div className={styles.video_wrapper_practice}>
              <video
                className={styles.video_practice}
                autoPlay
                muted
                poster="/img/swiper-practice.jpg"
                loop
                playsInline
              >
                <source src="/video/swiper-practice.mp4" />
              </video>
            </div>
          </div>
          {/* Swiper React end */}

          {/* 自由に移動 */}
          <div
            ref={addToTargets}
            className={`${styles.appear} ${styles.inner_wrapper_practice}`}
          >
            <div className={styles.text_wrapper_practice}>
              <h3>自由に移動</h3>
              <p>ホームページでマウスに追従するオブジェクトを制作するための練習として作りました。</p>
            </div>
            <div className={styles.video_wrapper_practice}>
              <video
                className={styles.video_practice}
                autoPlay
                muted
                poster="/img/move-app-pic.png"
                loop
                playsInline
              >
                <source src="/video/move-app.mp4" />
              </video>
            </div>
          </div>
          {/* 自由に移動　end */}

        </div>
      </div>
      {/* 
        practiceここまで
         */}
    </>
  );
}
