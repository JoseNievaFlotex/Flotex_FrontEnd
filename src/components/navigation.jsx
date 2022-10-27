import { NavLink } from "react-router-dom";
import React from "react";

export const Navigation = (props) => {
  const normalLink = "";
  return (
    <nav id="menu" className="row navbar navbar-default navbar-fixed-top">
      <div className="container container-nav-flotex" id="flotex-nav-id">
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="row nav navbar-nav navbar-right nav-flotex menu-navbar-flotex">
            <NavLink
              id="flotex-home-css"
              to="/header"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              FLOTEX
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/features"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Features
            </NavLink>
            <NavLink
              id="nav-a-flotex"
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              About
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/services"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Services
            </NavLink>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li> */}
            <NavLink
              id="nav-a-flotex"
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Gallery
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/testimonials"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              id="nav-a-flotex"
              to="/team"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Team
            </NavLink>

            <NavLink
              id="nav-a-flotex"
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              Contacto
            </NavLink>

            <NavLink id="nav-a-flotex" to='/dolar' className={ ({ isActive }) => (isActive ? 'bg-nav-flotex' : normalLink )}>
              Dolar
            </NavLink>
            {/* <NavLink to='/piso' className={ ({ isActive }) => (isActive ? 'bg-nav-flotex' : normalLink )}>
              Piso
            </NavLink> */}

            <NavLink
              to="/login"
              onClick={"modalFlotex"}
              id="nav-a-flotex"
              className={({ isActive }) =>
                isActive ? "bg-nav-flotex" : normalLink
              }
            >
              {/* // to='/login' onClick={"modalFlotex"} className={ ({ isActive }) => (isActive ? 'bg-nav-flotex' : normalLink ) }> */}
              Intranet
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
