import { NavLink } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="mainpage-conteiner">
      <NavLink to="/form" className={`nav-button`}>
        <button>FORM</button>
      </NavLink>
    </div>
  );
}

export default MainPage;
