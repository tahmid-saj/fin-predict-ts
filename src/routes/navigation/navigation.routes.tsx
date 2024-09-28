import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { NAV_LINKS } from "../../utils/constants/shared.constants";
import "./navigation.styles.scss";

export const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Finance Prediction</a>
          <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon white"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only"></span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.marketData}`}>Market</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Predictions</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.chatbot}`}>Chatbot</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.advice}`}>Advice</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.github}`}>
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.medium}`}>
                  <ion-icon name="logo-medium"></ion-icon>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.linkedIn}`}>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.portfolio}`}>tahmidsajin.io</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="outlet-container">
        <Outlet />
      </div>
    </Fragment>
  );
};
