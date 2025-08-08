/* import { useEffect } from "react"; */
import { useState } from "react";
import { useNavigate  } from "react-router-dom"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from './styles.module.scss';
import Button from '@/components/Button';
import { MinusIcon, PlusIcon } from "@/constants/icons";
/* import clsx from "clsx"; */

// TicketSection.jsx
export const TicketSection = (/* { tickets, setTickets }:{tickets:number, setTickets: React.Dispatch<React.SetStateAction<number>>} */)=>{
  const navigate = useNavigate();
const [tickets, setTickets] = useState(1);
  const handleBuyTickets = () => {
    if (tickets < 1) {
      /* alert("Please select at least one ticket."); */
      return;
    }
      navigate("/");
  };
  return (
  <section className={styles.ticket_section}>
            <h2 className={styles.ticket_title}>Get Your Lucky Ticket</h2>
            <div className={styles.ticket_icon}>
                <i className="fa-solid fa-ticket-alt" />
                <div className={styles.ticket_price}>$1 
                <span> USDT</span> 
                </div>
            </div>
            
            <div className={styles.ticket_quantity}>
                <Button className={styles.quantity_btn} onClick={() => setTickets(Math.max(1, tickets - 1))}><MinusIcon /></Button>
                <input
                 className={styles.quantity_input}
                 type="number"
                 min="1"
                 max="20"
                 value={tickets}
                 onChange={(e) => setTickets(+e.target.value)}
               />
                <Button className={styles.quantity_btn} onClick={() => setTickets(Math.min(20, tickets + 1))}><PlusIcon /></Button>
            </div>
            
            <Button 
               className={styles.buy_ticket_btn}
                disabled={tickets < 1}
               onClick={() =>
                handleBuyTickets()
               }
             >
               <i className="fa-solid fas fa-ticket-alt" /> Buy Ticket(s)
             </Button>
            <p >
                4-digit winning number = BTC last 2 decimals + ETH last 2 decimals
            </p>
        </section>
 
);
}