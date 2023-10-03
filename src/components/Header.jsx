import { NavLink } from "react-router-dom";
import * as ReactDOM from "react-dom/client";


const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { color: "orange" };
};

export default function Header() {
    return (
        <>
        <header>
          <nav>
            <NavLink style={getActiveLinkStyle} to="/">
              Home
            </NavLink>
            <NavLink style={getActiveLinkStyle} to="/html">
              HTML
            </NavLink>
            <NavLink style={getActiveLinkStyle} to="/css">
              CSS
            </NavLink>
            <NavLink style={getActiveLinkStyle} to="/js">
              JS
            </NavLink>
          </nav>
        </header>
        </>
    );
}