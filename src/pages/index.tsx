import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import React, { useRef, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { transform } from 'typescript';

export default function Home(props: any) {


  const targets = useRef([]);

  const addToTargets = (el:never) => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el)
      console.log(el);
      
    }
  }
  // const {ref:inViewRef,inView}=useInView();
  // const setRefs=useCallback((node:any)=>{
  //     ref.current=node;
  //     inViewRef(node)
  //     console.log(node,inView);
  //   },[inViewRef],
  // );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry:any) => {
        if (entry.isIntersecting) {
          // document.getElementsByTagName('body').style.opacity=1;
          entry.target.style.opacity=1;
          entry.target.style.transform='scale(1)';
          console.log(
            entry.target
          );
          // console.log(entry.target.classList);
        }
      });
    });
    targets.current.forEach((target) => {
      observer.observe(target);
    });
  }, [targets]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>～Ryotaro's Portfolio～</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.skill_wrapper}>
          <h3>Skill</h3>
          <p>HTML,CSS,JavaScript,React,Next.js,WordPress,PHP,SQL</p>
          <p>Firebase,Firestore,Git,GitHub,Vercel</p>
          <p>Photoshop,illustrator,XD,Premiere Pro</p>
        </div>
        {/* 
        websites
         */}
        <div className={`${styles.container} ${styles.websites_container}`}>
          <h2>Websites</h2>
          <div className={`${styles.wrapper} ${styles.websites_wrapper}`}>

            <div ref={addToTargets} className={styles.sanpatuya}>
              <a href="https://xs622417.xsrv.jp/homepage_test/index.html" target='_blank'>
                <h3>ザ・サンパツヤ</h3>
                <p className={styles.url_p}>url: https://xs622417.xsrv.jp/homepage_test/index.html</p>
              </a>
              <hr />
              <a href="https://github.com/ryotaro-0805/homepage-kankyokaihatu" target='_blank'>
                <p className={styles.code_p}>code: https://github.com/ryotaro-0805/homepage-kankyokaihatu</p>
              </a>
              <hr />
              <h3>Feature / 特徴</h3>
              <p>『キュート』、『親しみ』をテーマにHTML,CSS,JavaScriptで作成しております。</p>
              <p>SEO対策も施しているため、架空のショップサイトですがGoogleでの検索順位は上位となっています。</p>
            </div>

            <div ref={addToTargets} className={styles.kankyo}>
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

            <div ref={addToTargets} className={styles.seto}>
              <h3>瀬戸珈琲</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div ref={addToTargets} className={styles.site}>
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
        <div className={`${styles.container} ${styles.applications_container}`}>
          <h2>Applications</h2>
          <div className={`${styles.wrapper} ${styles.applications_wrapper}`}>
            <div>
              <h3>ToDoアプリ</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div>
              <h3>じゃんけん</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div>
              <h3>スロット</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div>
              <h3>仕事効率化</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
          </div>
        </div>

        {/* 
        practice
         */}
        <div className={`${styles.container} ${styles.practices_container}`}>
          <h2>Practices</h2>
          <div className={`${styles.wrapper} ${styles.practices_wrapper}`}>
            <div>
              <h3>Swiper</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div>
              <h3>流れる文字</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div>
              <h3>自由に移動</h3>
              <h3>Feature</h3>
              <p>texttexttext</p>
              <h3>trouble point</h3>
              <p>texttexttext</p>
            </div>
            <div>
              <h3></h3>
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
          This page is created by Ryotaro
        </h3>
      </footer>
    </>
  )
}
