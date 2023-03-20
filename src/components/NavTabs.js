import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        {/* <NavLink
          to="the-tribe/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink> */}
      </li>
      <li className="nav-item">
        <NavLink
          to="the-tribe/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/projectsgallery"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
      </li> */}
      {/* <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li> */}
      {/* <li className="nav-item">
        <NavLink
          to="second-portfolio-with-react/contact/learn"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Learn
        </NavLink>
      </li> */}
    </ul>
  );
}

export default NavTabs;
