import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useRef, useEffect, useState } from "react";
import ThreeDemo from "./ThreeDemo";
import FlowSentence from "./FlowSentence";
import Homepage from "./components/Homepage";
import Applicaton from "./components/Application";
import Practice from "./components/Practice";
import Footer from "./components/Footer";
import SwiperComp from "./components/SwiperComp";

export default function Home() {
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

  // 3D重いので、ページを読み込んでから表示
  // const [loadState, setLoadState] = useState<boolean>(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadState(true);
  //   }, 5000);
  // }, []);

  // 3D重いので、ページを読み込んでから表示　ここまで

  // 上スクロールバー出現 /メニュー出現
  const [myCss, setMyCss] = useState(styles.arrow);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    addEventListener("scroll", (e) => {
      setDistance(window.scrollY);
    });
    if (distance > 500) {
      setMyCss(`${styles.arrow} ${styles.active}`);
      setMyCss2(`${styles.appear_menu_wrapper} ${styles.active2}`);
    } else {
      setMyCss(`${styles.arrow}`);
      setMyCss2(`${styles.appear_menu_wrapper}`);
    }
  }, [distance]);
  // 上スクロールバー出現　/メニュー出現　end

  // menu出現
  const [myCss2, setMyCss2] = useState(
    `${styles.appear_menu_wrapper} ${styles.active2}`
  );
  // menu出現　end

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
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content"></div>
      <span className={`${myCss} material-symbols-outlined`}>
        <a className={styles.arrow_a} href="#top">
          arrow_circle_up
        </a>
      </span>{" "}
      {/* 上へのアイコン */}
      <header>
        <div id="top" className={styles.threeDimention_wrapper}>
          <ThreeDemo />
        </div>
        <h1 ref={addToTargets} className={`${styles.title} ${styles.appear}`}>
          ～Ryotaro's Portfolio～
        </h1>
        <div className="flow_sentence">
          <FlowSentence />
        </div>
        <div className={styles.main_menu_wrapper}>
          <h3 className={styles.main_menu}>
            <a style={{ color: "white" }} href="#website">
              Websites
            </a>
          </h3>
          <h3 className={styles.main_menu}>
            <a style={{ color: "white" }} href="#app">
              Applications
            </a>
          </h3>
          <h3 className={styles.main_menu}>
            <a style={{ color: "white" }} href="#practice">
              Practices
            </a>
          </h3>
        </div>
        <div className={myCss2}>
          <h3 className={styles.appear_menu}>
            <a style={{ color: "white" }} href="#website">
              Websites
            </a>
          </h3>
          <h3 className={styles.appear_menu}>
            <a style={{ color: "white" }} href="#app">
              Applications
            </a>
          </h3>
          <h3 className={styles.appear_menu}>
            <a style={{ color: "white" }} href="#practice">
              Practices
            </a>
          </h3>
        </div>
      </header>
      <main className={styles.main}>
        <SwiperComp />
        <Homepage />
        <Applicaton />
        <Practice />
      </main>
      <Footer />
    </>
  );
}
