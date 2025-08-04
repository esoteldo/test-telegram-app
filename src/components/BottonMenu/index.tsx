import { useNavigate } from "react-router-dom";
import { /* DisconnectIcon, WalletIcon, */Home } from '@/constants/icons.tsx';
import './bottonmenu.scss';

// BottomNav.jsx
export const BottomNav = () => {
  const navigate = useNavigate();
  /* const [active, setActive] = useState(0);
  const icons = ["fas fa-home", "fas fa-chart-line", "fas fa-trophy", "fas fa-user"]; */
  return (
<nav className=".bottom-nav">
  <div className=".nav-item" onClick={()=>{navigate("/")}} data-index="0">
    {/* <i className="fa-solid fa-home" ></i> */}
    <Home/>
  </div>
  <div className=".nav-item" data-index="1">
   <i className="fa-solid fa-trophy" ></i>
  </div>
  <div className=".nav-item" data-index="2">
    <i className="fa-solid fa-chart-line" ></i>
  </div>
  <div className=".nav-item" data-index="3">
    <i className="fa-solid fa-user" ></i>
  </div>
</nav>
  );
};