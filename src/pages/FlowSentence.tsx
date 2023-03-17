import React from 'react';
import Marquee from "react-fast-marquee";
import styles from '@/styles/Home.module.css';

const FlowSentence = () => {
  return (
    <div>

      <div className='flow_Sentence'>
        <Marquee direction='left' speed={50} gradient={true} gradientColor={[243, 239, 242]}>
        'Ryotaro'のポートフォリオをご覧いただきありがとうございます。ごゆっくりしていかれてください。　
        </Marquee>
      </div>

    </div>
  );
}

export default FlowSentence;