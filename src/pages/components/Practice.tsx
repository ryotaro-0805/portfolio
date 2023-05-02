import Head from "next/head";
import styles from "@/styles/Home.module.css";
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
            className={`${styles.appear} ${styles.practice_wrapper}`}
          >
            <video
              autoPlay
              muted
              poster="/img/swiper-practice.jpg"
              loop
              playsInline
            >
              <source src="/video/swiper-practice.mp4" />
            </video>
            <div className={styles.innerText}>
              <a
                href="https://swiper-practice-roan.vercel.app/"
                target="_blank"
              >

                <h3>Swiper React</h3>
              </a>
              <p>JavaScriptで制作しております。</p>
            </div>
          </div>
          {/*  */}

          <div ref={addToTargets} className={`${styles.appear}`}>
            <h3>流れる文字</h3>
            <h3>Feature</h3>
            <p>texttexttext</p>
            <h3>trouble point</h3>
            <p>texttexttext</p>
          </div>
          {/* 自由に移動 */}
          <div
            ref={addToTargets}
            className={`${styles.appear} ${styles.practice_wrapper}`}
          >
            <video
              autoPlay
              muted
              poster="/img/move-app-pic.png"
              loop
              playsInline
            >
              <source src="/video/move-app.mp4" />
            </video>
            <div className={styles.innerText}>
              <a
                href="https://homepage-kankyokaihatu.vercel.app"
                target="_blank"
              ></a>
              <h3>自由に移動</h3>
              <p className={styles.url_p}>
                url: https://homepage-kankyokaihatu.vercel.app/
              </p>
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
              <p>JavaScriptで制作しております。</p>
              <p></p>
            </div>
          </div>
          {/* 自由に移動　ここまで */}

          <div ref={addToTargets} className={`${styles.appear}`}>
            <h3>useful App</h3>
            <h3>Feature</h3>
            <p>texttexttext</p>
            <h3>trouble point</h3>
            <p>texttexttext</p>
          </div>
        </div>
      </div>
      {/* 
        practiceここまで
         */}
    </>
  );
}
