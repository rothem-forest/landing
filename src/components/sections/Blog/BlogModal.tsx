'use client';

import { motion } from 'framer-motion';
import styles from './BlogModal.module.css';
import { BlogPost } from './types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogModal = ({ post, onClose }: BlogModalProps) => {
  if (!post) return null;

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalContent}>
          <span className={styles.category}>{post.category}</span>
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.metadata}>
            <span>{post.date}</span>
            <span>{post.readTime} 읽기</span>
          </div>
          <div className={styles.content}>{post.content}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogModal;
