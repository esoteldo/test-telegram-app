import styles from './styles.module.scss';

// PrizeSection.jsx
export const PrizeSection = () => (
  <section className={styles.prize_section}>
            <h2 className={styles.prize_title} >Today's Grand Prize</h2>
            <div className={styles.prize_amount}>$2,500 <span >USDT</span></div>
        </section>
);