import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <Link href="/" className={styles.logo}>
              로뎀숲 심리연구소
            </Link>
            <p className={styles.description}>
              마음의 평안과 성장을 함께하는
              <br />
              로뎀숲 심리연구소
            </p>
          </div>

          <div className={styles.sections}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>상담 문의</h3>
              <ul className={styles.contactList}>
                <li>
                  <strong>창원점</strong>
                  <a href="tel:01024763448">010-2476-3448</a>
                </li>
                <li>
                  <strong>김해점</strong>
                  <a href="tel:0553234523">055-323-4523</a>
                </li>
                <li>
                  <strong>울산점</strong>
                  <a href="tel:01064007188">010-6400-7188</a>
                </li>
                <li>
                  <strong>예약 문의시간</strong>
                  <p>평일 10:00 - 20:00</p>
                  <p>토요일 10:00 - 17:00</p>
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>바로가기</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href="#services">상담 프로그램</Link>
                </li>
                <li>
                  <Link href="#counselor">상담사 소개</Link>
                </li>
                <li>
                  <Link href="#reviews">상담 후기</Link>
                </li>
                <li>
                  <Link href="#reservation">상담 예약</Link>
                </li>
                <li>
                  <Link href="#location">오시는 길</Link>
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>SNS</h3>
              <ul className={styles.socialList}>
                <li>
                  <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} 로뎀숲 심리상담연구소. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy">개인정보처리방침</Link>
            <span className={styles.divider}>|</span>
            <Link href="/terms">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
