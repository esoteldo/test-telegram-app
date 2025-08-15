import styles from './styles.module.scss';


// HowItWorks.jsx
export const HowItWorks = () => (
  <section className={styles.rules_section}>
            <h2 className={styles.rules_title}>How It Works</h2>
            <ul className={styles.rules_list}>
                <li>Every day at 8:00 PM UTC, we take the last three decimal places of Bitcoin and Ethereum prices</li>
                <li>These 4 digits are combined to create the winning number sequence (e.g., BTC:12 + ETH:34 = 1234)</li>
                <li>All eligible participants with matching ticket numbers win a share of the prize pool</li>
                <li>Prizes are distributed automatically to the winning wallet addresses within 24 hours</li>
                <li>Ticket numbers are assigned randomly or manually for participants each day</li>
                <li>Each ticket costs $3 USD and can win the full $2,500 prize</li>
            </ul>
        </section>
);