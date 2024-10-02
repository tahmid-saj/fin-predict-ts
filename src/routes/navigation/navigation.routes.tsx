import { Outlet, useNavigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { NAV_LINKS } from "../../utils/constants/shared.constants";
import "./navigation.styles.scss";

export const Navigation = () => {
  const navigate = useNavigate();

  const navigateToPath = (path: string) => {
    navigate(path);
  };

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
                <a className="nav-link" onClick={ () => navigateToPath(NAV_LINKS.paths.marketData) }>Market</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={ () => navigateToPath(NAV_LINKS.paths.predictions) }>Predictions</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={ () => navigateToPath(NAV_LINKS.paths.chatbot) }>Chatbot</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" onClick={ () => navigateToPath(NAV_LINKS.paths.advice) }>Advice</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.github}`}>
                  {/* <IonIcon name="logo-github"></IonIcon> */}
                  GitHub
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.medium}`}>
                  {/* <IonIcon name="logo-medium"></IonIcon> */}
                  Medium
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.linkedIn}`}>
                  {/* <IonIcon name="logo-linkedin"></IonIcon> */}
                  LinkedIn
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={`${NAV_LINKS.paths.portfolio}`}>tahmidsajin.io</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
