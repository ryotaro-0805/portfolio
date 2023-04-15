import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useRef, useEffect } from "react";

export default function Applicaton() {
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
      Applications
      */}
      <a id="app" className={styles.jump_margin} href=""></a>
      <div
        ref={addToTargets}
        className={`${styles.container} ${styles.appear}`}
      >
        <h2>Applications</h2>
        <p className={styles.comment}>私が作成した、ウェブアプリです。</p>
        <div className={`${styles.wrapper} ${styles.applications_wrapper}`}>
          {/* 
            ToDoアプリ
             */}
          <div
            ref={addToTargets}
            className={`${styles.appear} ${styles.todoApp}`}
          >
            <a href="https://firebase-connection.vercel.app/" target="_blank">
              <h3>ToDoアプリ</h3>
              <p className={styles.url_p}>
                url: https://firebase-connection.vercel.app/
              </p>
            </a>
            <hr />
            <a
              href="https://github.com/ryotaro-0805/todo-App-using-firebase"
              target="_blank"
            >
              <p className={styles.code_p}>
                code: https://github.com/ryotaro-0805/todo-App-using-firebase
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>
              Firebase-Firestoreを使用しているので、入力したToDoを永続的に保存、出力することができます。
            </p>
            <p>
              予定の入力、完了、編集、削除機能を有していますので、ToDoアプリとしての本格的な使用も可能です。
            </p>
          </div>
          {/* 
              じゃんけん
             */}
          <div
            ref={addToTargets}
            className={`${styles.appear} ${styles.rockApp}`}
          >
            <a href="https://rock-app.vercel.app/" target="_blank">
              <h3>じゃんけん</h3>
              <p className={styles.url_p}>url: https://rock-app.vercel.app/</p>
            </a>
            <hr />
            <a
              href="https://github.com/ryotaro-0805/rock-paper-scissors-App"
              target="_blank"
            >
              <p className={styles.code_p}>
                code: https://github.com/ryotaro-0805/rock-paper-scissors-App
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>定番のじゃんけんアプリです。</p>
            <p>デザインにもこだわり制作しました。</p>
            <p>
              5回連続で勝利してエンディングを目指すというゲーム性も有しております。
            </p>
          </div>
          {/* 
             　スロット
             */}
          <div
            ref={addToTargets}
            className={`${styles.appear} ${styles.slotApp}`}
          >
            <a href="https://fighting-app.vercel.app/" target="_blank">
              <h3>スロット</h3>
              <p className={styles.url_p}>
                url: https://fighting-app.vercel.app/
              </p>
            </a>
            <hr />
            <a href="https://github.com/ryotaro-0805/slot-App" target="_blank">
              <p className={styles.code_p}>
                code: https://github.com/ryotaro-0805/slot-App
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>Reactで制作したスロットゲームの基礎部分です。</p>
            <p>3つの数字の当たり判定と処理までをコーディングしています。</p>
            <p>
              今後はグラフィック、サウンド、コインの増減等を追加して、ゲーム性を拡充していく予定です。
            </p>
          </div>
          {/* 
              仕事効率化
             */}
          <div
            ref={addToTargets}
            className={`${styles.appear} ${styles.usefulApp}`}
          >
            <a href="https://firebase-connection.vercel.app/" target="_blank">
              <h3>アプリ名</h3>
              <p className={styles.url_p}>
                url: https://firebase-connection.vercel.app/
              </p>
            </a>
            <hr />
            <a
              href="https://github.com/ryotaro-0805/todo-App-using-firebase"
              target="_blank"
            >
              <p className={styles.code_p}>
                code: https://github.com/ryotaro-0805/todo-App-using-firebase
              </p>
            </a>
            <hr />
            <h3>Feature / 特徴</h3>
            <p>ここに特徴が入ります。</p>
            <p>ここに特徴が入ります。</p>
          </div>
        </div>
      </div>
      {/*
      Applicationsここまで
      */}
    </>
  );
}
