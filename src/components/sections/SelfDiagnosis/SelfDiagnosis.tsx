"use client";

// SelfDiagnosis.tsx
import * as motion from "framer-motion/client";
import styles from "./SelfDiagnosis.module.css";
import { useRouter } from "next/navigation";
// import Image from "next/image";

const SelfDiagnosis = () => {
  const router = useRouter();

  const handleStartDiagnosis = () => {
    router.push("/selfDiagnosis");
  };

  return (
    <section className={styles.diagnosis}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>무료 자가진단</h2>
          <p className={styles.description}>간단한 테스트를 통해 현재 상태를 확인해보세요</p>
          <motion.button
            className={styles.startButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartDiagnosis}
          >
            진단 시작하기
          </motion.button>
        </motion.div>

        {/* <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image src="/images/girl.jpg" alt="자가진단 일러스트" width={500} height={300} className={styles.image} />
        </motion.div> */}
      </div>
    </section>
  );
};

export default SelfDiagnosis;
