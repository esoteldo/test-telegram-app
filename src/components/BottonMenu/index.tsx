import { useNavigate } from "react-router-dom";
/* import {  Home } from '@/constants/icons.tsx'; */
import clsx from 'clsx';
import styles from './styles.module.scss';

import "@fortawesome/fontawesome-free/css/all.min.css";

// BottomNav.jsx
export const BottomNav = () => {
  const navigate = useNavigate();
  /* const [active, setActive] = useState(0);
  const icons = ["fas fa-home", "fas fa-chart-line", "fas fa-trophy", "fas fa-user"]; */
  return (
<nav className={styles.bottom_nav}>
  <div className={clsx(styles.nav_item,styles.active)} onClick={()=>{navigate("/")}} data-index="0">
    <i className="fa-solid fa-home" ></i>
    {/* <Home/> */}
  </div>
  <div className={styles.nav_item} data-index="1">
   <i className="fa-solid fa-trophy" ></i>
  </div>
  <div className={styles.nav_item} data-index="2">
    <i className="fa-solid fa-chart-line" ></i>
  </div>
  <div className={styles.nav_item} data-index="3">
    <i className="fa-solid fa-user" ></i>
  </div>
</nav>
  );
};