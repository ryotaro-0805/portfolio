import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React, { useRef, useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ThreeDemo from './ThreeDemo';
import FlowSentence from './FlowSentence';

export default function Home() {
  // inntersection observer start
  const targets = useRef([]);
  const addToTargets = (el: never) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el)
    }
  }
  const options = {
    threshold: 0
  }
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

  // 上スクロールバー出現 /メニュー出現
  const [myCss, setMyCss] = useState(styles.arrow);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    addEventListener('scroll', (e) => {
      setDistance(window.scrollY);
    });
    if (distance > 500) {
      setMyCss(`${styles.arrow} ${styles.active}`)
      setMyCss2(`${styles.appear_menu_wrapper} ${styles.active2}`)
    } else {
      setMyCss(`${styles.arrow}`)
      setMyCss2(`${styles.appear_menu_wrapper}`)
    }
  }, [distance]);
  // 上スクロールバー出現　/メニュー出現　end

  // menu出現
  const [myCss2, setMyCss2] = useState(`${styles.appear_menu_wrapper} ${styles.active2}`);
  // menu出現　end

  return (
    <>
      <Head >
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <span className={`${myCss} material-symbols-outlined`}>
        <a className={styles.arrow_a} href="#top">
          arrow_circle_up
        </a>
      </span> {/* 上へのアイコン */}
      <header>
        <div id='top' className={styles.threeDimention_wrapper}>
          <ThreeDemo />
        </div>
        <h1 ref={addToTargets} className={`${styles.title} ${styles.appear}`}>～Ryotaro's Portfolio～
        </h1>
        <div className="flow_sentence">
        <FlowSentence />
        </div>
        <div className={styles.main_menu_wrapper}>
          <h3 className={styles.main_menu}><a style={{ color: 'white' }} href="#website">Websites</a></h3>
          <h3 className={styles.main_menu}><a style={{ color: 'white' }} href="#app">Applications</a></h3>
          <h3 className={styles.main_menu}><a style={{ color: 'white' }} href="#practice">Practices</a></h3>
        </div>
        <div className={myCss2}>
          <h3 className={styles.appear_menu}><a style={{ color: 'white' }} href="#website">Websites</a></h3>
          <h3 className={styles.appear_menu}><a style={{ color: 'white' }} href="#app">Applications</a></h3>
          <h3 className={styles.appear_menu}><a style={{ color: 'white' }} href="#practice">Practices</a></h3>
        </div>
      </header>
      <main className={styles.main}>
        <div ref={addToTargets} className={`${styles.appear}`}>
          <Swiper
            //autoplay={{"delay": 1000}} 追記 
            autoplay={{ "delay": 5000 }}
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
                <h3><span style={{ marginRight: '5px', verticalAlign: '-5px' }} className="material-symbols-outlined">
                  star
                </span>Skills</h3>
                <p>HTML, CSS, JavaScript, React, Next.js, WordPress, PHP, SQL</p>
                <p>Firebase, Firestore, Git, GitHub, Vercel</p>
                <p>Photoshop, illustrator, XD, Premiere Pro</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles.skill_wrapper}`}>
                <h3><span style={{ marginRight: '5px', verticalAlign: '-5px' }} className="material-symbols-outlined">
                  select_check_box
                </span>About Me</h3>
                <p>～プロフィール～</p>
                <p>＜受注可能な作業内容＞</p>
                <p>ホームページ作成：モダンな言語で高速かつSEOに強いホームページを作成します。</p>
                <p>システム構築：お問い合わせシステム、入力データの保存、データベースアクセス等のシステム構築が可能です。</p>
                <p>稼働時間</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles.skill_wrapper}`}>
                <h3><span style={{ marginRight: '5px', verticalAlign: '-5px' }} className="material-symbols-outlined">
                  arrow_outward
                </span>Objective</h3>
                <p>モダンな言語、堅牢なシステム、型崩れしない表示を目指してコーディングを行います。</p>
                <p>お客様のご要望に何なりと答えられるスキルを得られるよう日々精進しております。</p>
                <p>フロントエンジニアの高みを目指します。</p>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
        {/* 
        websites
      */}
        <a id='website' className={styles.jump_margin}></a>
        <div ref={addToTargets} className={`${styles.container} ${styles.appear}`}>
          {/* <div className={`${styles.container}`}> */}
          <h2>Websites</h2>
          <p className={styles.comment}>私が作成した、ウェブサイトの紹介です。</p>
          <div className={`${styles.wrapper} ${styles.websites_wrapper}`}>
            {/* 
            ザ・サンパツヤ
             */}
            <div ref={addToTargets} className={`${styles.sanpatuya} ${styles.appear}`}>
              <a href="https://xs622417.xsrv.jp/homepage_test/index.html" target='_blank'>
                <h3>ザ・サンパツヤ</h3>
                <p className={styles.url_p}>url: https://xs622417.xsrv.jp/homepage_test/index.html</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/sanpatuya" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/sanpatuya</p>
              </a>
              <hr />
              <h3>Feature / 特徴</h3>
              <p>『キュート』、『親しみ』をテーマにHTML,CSS,JavaScriptで作成しております。</p>
              <p>SEO対策も施しているため、架空のショップサイトですが検索エンジンでの順位は上位となっています。</p>
            </div>
            {/* 
            環境開発株式会社
             */}
            <div ref={addToTargets} className={`${styles.kankyo} ${styles.appear}`}>
              <a href="https://homepage-kankyokaihatu.vercel.app" target='_blank'>
                <h3>環境開発株式会社</h3>
                <p className={styles.url_p}>url: https://homepage-kankyokaihatu.vercel.app/</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/homepage-kankyokaihatu" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/homepage-kankyokaihatu</p>
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
            <a href="https://seto-cafe-homepage.vercel.app/" target='_blank'>
              <h3>瀬戸珈琲</h3>
              <p className={styles.url_p}>url: https://seto-cafe-homepage.vercel.app/</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/seto-cafe-homepage" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/seto-cafe-homepage</p>
              </a>
              <hr />
              <h3>Feature / 特徴</h3>
              <p>『シック』、『愛情』をテーマにHTML,CSS,JavaScriptで作成しております。</p>
              <p>知人が珈琲の焙煎が趣味だったので、ビジネスにする場合の参考サイトとして制作しました。</p>
            </div>
            {/* 
            ホームページ
             */}
            <div ref={addToTargets} className={`${styles.site} ${styles.appear}`}>
              <h3>site name</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
          </div>
        </div>

        {/* 
        applications
         */}
        <a id='app' className={styles.jump_margin} href=""></a>
        <div ref={addToTargets} className={`${styles.container} ${styles.appear}`}>
          <h2>Applications</h2>
          <p className={styles.comment}>私が作成した、ウェブアプリです。</p>
          <div className={`${styles.wrapper} ${styles.applications_wrapper}`}>
            {/* 
            ToDoアプリ
             */}
            <div ref={addToTargets} className={`${styles.appear}`}>
              <a href="https://firebase-connection.vercel.app/" target='_blank'>
                <h3>ToDoアプリ</h3>
                <p className={styles.url_p}>url: https://firebase-connection.vercel.app/</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/todo-App-using-firebase" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/todo-App-using-firebase</p>
              </a>
              <hr />
              <h3>Feature / 特徴</h3>
              <p>Firebase-Firestoreを使用しているので、入力したToDoを永続的に保存、出力することができます。</p>
              <p>予定の入力、完了、編集、削除機能を有していますので、ToDoアプリとしての本格的な使用も可能です。</p>
            </div>
            {/* 
              じゃんけん
             */}
            <div ref={addToTargets} className={`${styles.appear}`}>
              <a href="https://rock-app.vercel.app/" target='_blank'>
                <h3>じゃんけん</h3>
                <p className={styles.url_p}>url: https://rock-app.vercel.app/</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/rock-paper-scissors-App" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/rock-paper-scissors-App</p>
              </a>
              <hr />
              <h3>Feature / 特徴</h3>
              <p>定番のじゃんけんアプリです。</p>
              <p>デザインにもこだわり制作しました。</p>
              <p>5回連続で勝利するとエンディングというゲーム性も有しております。</p>
            </div>
            {/* 
             　スロット
             */}
            <div ref={addToTargets} className={`${styles.appear}`}>
              <a href="https://fighting-app.vercel.app/" target='_blank'>
                <h3>スロット</h3>
                <p className={styles.url_p}>url: https://fighting-app.vercel.app/</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/slot-App" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/slot-App</p>
              </a>
              <hr />
              <h3>Feature / 特徴</h3>
              <p>Reactで制作したスロットゲームの基礎部分です。</p>
              <p>3つの数字の当たり判定と処理までをコーディングしています。</p>
              <p>今後はグラフィック、サウンド、コインの増減等を追加して、ゲーム性を拡充していく予定です。</p>
            </div>
            {/* 
              仕事効率化
             */}
            <div ref={addToTargets} className={`${styles.appear}`}>
              <a href="https://firebase-connection.vercel.app/" target='_blank'>
                <h3>アプリ名</h3>
                <p className={styles.url_p}>url: https://firebase-connection.vercel.app/</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/todo-App-using-firebase" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/todo-App-using-firebase</p>
              </a>
              <hr />
              <h3>Feature / 特徴</h3>
              <p>ここに特徴が入ります。</p>
              <p>ここに特徴が入ります。</p>
            </div>
          </div>
        </div>

        {/* 
        practice
         */}
        <a id='practice' className={styles.jump_margin} href=""></a>
        <div ref={addToTargets} className={`${styles.container} ${styles.appear}`}>
          <h2>Practices</h2>
          <p className={styles.comment}>今までにコーディングの練習として作成したものを紹介しております。</p>
          <div className={`${styles.wrapper} ${styles.practices_wrapper}`}>
            <div ref={addToTargets} className={`${styles.appear}`}>
              <h3>Swiper</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div ref={addToTargets} className={`${styles.appear}`}>
              <h3>流れる文字</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div ref={addToTargets} className={`${styles.appear}`}>
              <h3>自由に移動</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div ref={addToTargets} className={`${styles.appear}`}>
              <h3>useful App</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <h3>
          <span style={{ marginRight: '5px', verticalAlign: '-5px' }} className="material-symbols-outlined">
            potted_plant
          </span>This page is created by Ryotaro
        </h3>
      </footer>
    </>
  )
}
