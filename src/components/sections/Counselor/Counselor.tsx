'use client';

import * as motion from 'framer-motion/client';
import styles from './Counselor.module.css';
import Image from 'next/image';

// const careerHistory = [
//   { year: "2024", description: "로뎀숲 심리연구소 대표" },
//   { year: "2023", description: "한국심리학회 상담심리사 1급" },
//   { year: "2022", description: "서울대학교 심리상담학과 박사" },
//   { year: "2020", description: "국제심리상담센터 수석상담사" },
//   { year: "2018", description: "한국상담학회 전문상담사 자격 취득" },
//   { year: "2017", description: "연세대학교 심리학과 석사" },
// ];

const Counselor = () => {
  return (
    <section className={styles.counselor} id="counselor">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageGrid}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://modo-phinf.pstatic.net/20230130_140/1675026430046r176A_PNG/mosaIMyw4d.png?type=f530_353"
                alt="상담실 이미지 1"
                className={styles.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            {/* <motion.div
              className={`${styles.imageWrapper} ${styles.imageSecond}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://modo-phinf.pstatic.net/20230126_36/1674699239372J142M_PNG/mosaXOw3lU.png?type=f353_353"
                alt="상담실 이미지 2"
                className={styles.image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div> */}
          </div>

          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className={styles.title}>전문 심리상담사 소개</h2>
            <p className={styles.description}>
              저희는 10년 이상의 경험을 가진 전문 심리상담사들로 구성되어 있습니다. 우울증,
              불안장애, 트라우마 등 다양한 심리적 어려움을 겪고 계신 분들께 전문적이고 따뜻한 상담을
              제공해 드립니다. 내담자 한 분 한 분의 이야기에 귀 기울이며, 함께 치유의 여정을
              걸어가겠습니다.
            </p>
            <motion.button
              className={styles.readMoreButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              상담사 프로필 보기
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Counselor;
