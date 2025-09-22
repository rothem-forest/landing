"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";
import styles from "./Blog.module.css";
import BlogModal from "./BlogModal";
import { BlogPost } from "./types";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "일상 속 스트레스 관리하는 방법",
    excerpt: "바쁜 현대 생활 속에서 스트레스를 건강하게 관리하는 실천적인 방법들을 알아봅니다.",
    imageUrl: "/images/가족상담.jpg",
    category: "스트레스 관리",
    date: "2024.03.15",
    readTime: "5분",
    content: `스트레스는 현대인의 일상이 되었습니다. 하지만 적절한 관리만 있다면 스트레스를 줄이고 
    건강한 삶을 영위할 수 있습니다.

    1. 규칙적인 운동
    하루 30분의 가벼운 운동만으로도 스트레스 호르몬을 감소시킬 수 있습니다.

    2. 충분한 수면
    하루 7-8시간의 충분한 수면은 몸과 마음의 회복에 필수적입니다.

    3. 명상과 호흡
    간단한 호흡 명상으로 마음의 안정을 찾을 수 있습니다.
    
    이러한 방법들을 일상에서 꾸준히 실천한다면, 스트레스 관리에 큰 도움이 될 것입니다.`,
  },
  {
    id: 2,
    title: "마음챙김의 시작, 호흡명상",
    excerpt: "일상에서 쉽게 실천할 수 있는 호흡명상 방법과 그 효과에 대해 알아봅니다.",
    imageUrl: "/images/가족상담.jpg",
    category: "마음챙김",
    date: "2024.03.10",
    readTime: "3분",
  },
  {
    id: 3,
    title: "건강한 부부관계를 위한 대화법",
    excerpt: "서로를 이해하고 존중하는 대화를 통해 더 깊은 관계를 만드는 방법을 소개합니다.",
    imageUrl: "/images/가족상담.jpg",
    category: "관계",
    date: "2024.03.05",
    readTime: "4분",
  },
  {
    id: 4,
    title: "자존감 회복을 위한 일상 습관",
    excerpt: "작은 실천으로 시작하는 자존감 회복 여정, 함께 시작해보세요.",
    imageUrl: "/images/가족상담.jpg",
    category: "자기계발",
    date: "2024.03.01",
    readTime: "6분",
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>마음 성장 이야기</h2>
          <p className={styles.subtitle}>일상 속 작은 실천으로 시작하는 마음 건강</p>
        </motion.div>

        <div className={styles.grid}>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.readTime}>{post.readTime} 읽기</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button className={styles.viewAllButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            전체 글 보기
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog;
