
import styles from './styles.module.scss';

// PastWinners.jsx
export const PastWinners = ({ open, toggle }:{open:boolean, toggle:()=>void}) => (
  
  <section className={styles.past_winners_wrapper}>
    
    <button className={styles.past_winners_toggle} id="pastWinnersToggle" onClick={toggle}>
    <i className="fas fa-trophy"></i>
    View All Past Winners
   {(!open) ? <i className="fas fa-chevron-down"></i>:<i className="fas fa-chevron-up"></i> }
  </button>
    {open && (
      <>
      <div className={styles.past_winners_panel} style={{marginTop:"10px", display: "block"}} id="pastWinnersPanel">

        <div className={styles.search_bar}>
        <i className="fas fa-search"></i>
        <input type="text" id="pastWinnersSearch" placeholder="Search by date or address…"/>
        </div>
        
      </div>
      <div className={styles.table_wrapper}>
      <table id="pastWinnersTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Winning #</th>
            <th>Prize</th>
            <th>Winner Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>28/07/2025</th>
            <th>208</th>
            <th>3500$</th>
            <th>Ado3w1...32c3</th>
          </tr>
          
        </tbody>
      </table>
    </div>
  </>
  
    )}
  </section>
);
