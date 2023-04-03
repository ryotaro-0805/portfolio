import React from 'react';
import Marquee from "react-fast-marquee";
import styles from '@/styles/Home.module.css';

const FlowSentence = () => {
  return (
    <div>

      <div className='flow_Sentence'>
        <Marquee direction='left' speed={80} gradient={false} gradientColor={[255, 255, 255]} gradientWidth={50}>
        　　　　　　　　　　　　　ポートフォリオをご覧いただきありがとうございます。このサイトはNext.js/React-three-fiber/Swiper/React Fast Marqueeを使用して制作しております。ごゆっくりして行ってください。　
        </Marquee>
      </div>

    </div>
  );
}

export default FlowSentence;