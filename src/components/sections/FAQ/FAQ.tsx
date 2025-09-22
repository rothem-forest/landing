"use client";

import * as motion from "framer-motion/client";
import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "상담 시간은 어떻게 되나요?",
    answer:
      "상담은 1회기당 50분이며, 주 1회를 기본으로 합니다. 첫 상담은 무료로 진행되며, 이후 상담 일정은 상담사와 협의하여 결정됩니다.",
  },
  {
    id: 3,
    question: "야간이나 주말 상담도 가능한가요?",
    answer:
      "네, 가능합니다. 평일 저녁 7시까지, 토요일은 오전 10시부터 오후 5시까지 상담이 가능합니다. 구체적인 시간은 예약 시 조율 가능합니다.",
  },
  {
    id: 4,
    question: "상담 취소는 언제까지 가능한가요?",
    answer:
      "상담 24시간 전까지 취소가 가능합니다. 당일 취소의 경우 취소 수수료가 발생할 수 있으니 가급적 미리 연락 주시기 바랍니다.",
  },
  {
    id: 5,
    question: "상담 내용은 비밀이 보장되나요?",
    answer:
      "네, 모든 상담 내용은 철저히 비밀이 보장됩니다. 상담 내용은 법적 의무가 있는 경우를 제외하고는 절대 외부에 공개되지 않습니다.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>자주 묻는 질문</h2>
          <p className={styles.subtitle}>로뎀숲 상담에 대해 궁금하신 점을 확인하세요</p>
        </motion.div>

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${styles.faqItem} ${openId === item.id ? styles.open : ""}`}
              initial={false}
            >
              <button className={styles.question} onClick={() => toggleItem(item.id)}>
                <span>{item.question}</span>
                <motion.span
                  className={styles.icon}
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                className={styles.answer}
                initial={false}
                animate={{
                  height: openId === item.id ? "auto" : 0,
                  opacity: openId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{item.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
