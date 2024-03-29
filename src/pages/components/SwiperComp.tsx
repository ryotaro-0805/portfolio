import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useRef, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComp() {
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
      <div
        ref={addToTargets}
        className={`${styles.appear} ${styles.swiper_container}`}
      >
        <Swiper
          //autoplay={{"delay": 1000}} 追記
          autoplay={{ delay: 5000 }}
          // デフォルト＋Autoplay, EffectFade追記
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          // speed追記
          speed={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className={`${styles.skill_wrapper}`}>
              <h3>
                <span
                  style={{ marginRight: "5px", verticalAlign: "-5px" }}
                  className="material-symbols-outlined"
                >
                  star
                  {/* </span>Skill <span className={styles.japanese_span}>スキル</span></h3> */}
                </span>
                <ruby>
                  Skill<rt>スキル</rt>
                </ruby>
              </h3>
              <br />
              <p>HTML, CSS, JavaScript, React, Next.js, WordPress, PHP, SQL</p>
              <br />
              <p>Firebase, Firestore, Git, GitHub, Vercel</p>
              <br />
              <p>Photoshop, illustrator, XD, Premiere Pro</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.skill_wrapper}`}>
              <h3>
                <span
                  style={{ marginRight: "5px", verticalAlign: "-5px" }}
                  className="material-symbols-outlined"
                >
                  select_check_box
                </span>
                <ruby>
                  About me<rt>私について</rt>
                </ruby>
              </h3>
              {/* <p>～プロフィール～</p> */}
              <p>＜受注可能な作業内容＞</p>
              <p>
                ホームページ制作：モダンな言語で高速かつSEOに強いホームページを作成します。
              </p>
              <p>
                システム構築：お問い合わせフォーム、入力データの保存、データベースアクセス等のシステム構築が可能です。
              </p>
              <p>
                Webアプリ作成：React/Next.jsを使用したWebアプリケーションを制作いたします。
              </p>
              <p>稼働時間:50時間/月</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.skill_wrapper}`}>
              <h3>
                <span
                  style={{ marginRight: "5px", verticalAlign: "-5px" }}
                  className="material-symbols-outlined"
                >
                  arrow_outward
                </span>
                <ruby>
                  Objective<rt>目標</rt>
                </ruby>
              </h3>
              <p>
                モダンな言語、堅牢なシステム、型崩れしない高速なサイトを制作するよう努力しています。
              </p>
              <p>
                お客様のご要望に答えられるスキルを得られるよう日々精進しております。
              </p>
              <p>フロントエンジニアの高みを目指します。</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
