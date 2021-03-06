import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Header.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeDark, setIsThemeDark] = useState(false);

  // Check if dark mode on the device is active
  useEffect(() => {
    const checkMode = () => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsThemeDark(true);
      }
    };
    checkMode();
  }, []);

  isThemeDark
    ? (document.body.dataset.theme = "dark")
    : (document.body.dataset.theme = "default");

  isMenuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = null);

  return (
    <header>
      <div id="menu-fixed">
        <NavHashLink to="/#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            fill={isThemeDark ? "#f2f2f2" : "#171717"}
            height="50px"
            width="50px"
          >
            <g id="k-logo">
              <path
                className="cls-1"
                d="M853.55,146.45a504.71,504.71,0,0,0-71.09-59.19c-.25-2.39-.56-4.76-1-7.07-1.06-6.2-5.31-28.14-12-13.74q-2.19,4.71-4.44,9.37C686.34,26.44,595.2,0,500,0,366.44,0,240.88,52,146.45,146.45S0,366.45,0,500,52,759.12,146.45,853.55a504.79,504.79,0,0,0,73,60.48c.71,4.33,1.55,8.58,2.48,12.73.13.59,4.8,16.85,8.55,9.85,2-3.8,4.06-7.62,6.09-11.44C314.89,973.92,405.44,1000,500,1000c133.55,0,259.12-52,353.55-146.45S1000,633.55,1000,500,948,240.88,853.55,146.45ZM17.44,500C17.44,233.92,233.92,17.44,500,17.44A479.69,479.69,0,0,1,757.16,91.83c-34.78,68.89-78.1,133.27-122.71,196.11q-79.08,111.38-162.53,219.6Q435.41,555,398.14,601.93q14.16-30.37,28.05-60.87C455.78,476,484.78,409.86,505,341.12c11.24-38.33,18.8-77.66,19.93-117.68.66-23.3-.16-46.73-4.61-69.66-3.1-16-8.52-34.14-21.56-45C486,98.27,469.36,96,453.36,96.72c-18.12.8-36.36,4-54,7.88a402.63,402.63,0,0,0-107.85,40.89c-4,2.23-4.89,7.41-5.76,11.6-1.81,8.83-2.12,18.75-1.82,27.7.09,2.65,3.9,42,9.5,38.89a402.47,402.47,0,0,1,88.11-36A396.32,396.32,0,0,1,427.38,178c14.5-2.19,29.57-4.32,44.24-2.63,13.24,1.54,25.55,6.79,32.83,18.51a38.56,38.56,0,0,1,3,6.37c0,.12.09.25.14.37v-.22c0,.05,0,.18.1.39v.07l0,.08v-.06l0,.11s0-.07,0-.09l0-.09c0-.17,0-.34,0-.52,0,.16,0,.3-.06.44l-.11-.35c0-.88.08-2.18.19-4.09-.08,1.37.11,2.86.14,4.23,0,.41,0,.78,0,1.14h0a.86.86,0,0,0,0,.16.05.05,0,0,1,0,0c0,.46.05.88.08,1.25,0,1.66-.25,3.5-.3,4.93,0,.14-.05.74-.09,1.39-.11,1.27-.29,3.3-.34,3.8q-.31,3.22-.7,6.44c-.14,1.18-.29,2.35-.44,3.52-.12.7-.42,2.71-.47,3-.75,4.27-1.48,8.54-2.33,12.79a451.28,451.28,0,0,1-12,45.9c-19.87,63.74-46.52,125.25-74.07,186q-42.07,92.73-87.07,184.1-46.71,94.89-96.43,188.26c-2.31-7.76-6.17-15.94-10-5.29-5.87,16.4-7.69,34.72-6.86,52.8C96.14,802.82,17.44,660.43,17.44,500ZM508,201.84l0-.21C508.9,202.17,508.39,202.41,508,201.84Zm-8,780.72a479.72,479.72,0,0,1-255.1-73.08Q310,786.62,370.14,661.16a149.84,149.84,0,0,0,.63,17.3c.33,3.45,4.41,34.49,11.17,27a590.2,590.2,0,0,1,110.77-95.22,571.65,571.65,0,0,1,61.15-35.12c21.22-10.53,43.33-21,66.29-27.06,20.56-5.45,46.11-7.82,63.69,6.65a55,55,0,0,1,15.59,21.17,52.91,52.91,0,0,1,3.85,11.52c.09.38,1.11,4.95,1.19,5.12.64,3.56,1.14,7.14,1.68,10.71.1.65.18,1.19.25,1.63s.07,1.12.13,1.92c.21,3,.63,6,.71,9,0,1.37,0,2.73,0,3.2.08,3.19.36,6.53.15,9.72.64-9.77,0,1-.06,2.6-.07,3.25-.17,6.51-.29,9.76-.29,7.61-.72,15.22-1.19,22.82,0,.6-.06,1.09-.09,1.53s-.09,1.24-.16,2.17c-.25,3.27-.48,6.54-.72,9.81-.49,6.54-1,13.07-1.45,19.61-1.08,15.09-2.14,30.19-2.7,45.31-1.34,36.77-2.28,77,7.15,112.88,3.25,12.35,9.92,27.27,24.89,27.2,12-.06,23.42-9.29,31.93-16.8,3.45-3.06,4.27-14.56,4.66-18.09a151.13,151.13,0,0,0,.12-30.15c-.4-4-3.48-33.84-11.17-27s-16.86,13.85-27.46,13.89c-5.25,0-8.81-1.8-12.15-5.74a5.08,5.08,0,0,1-.33-.47c0-.25,0-.47-.08-.77-.22-3.12-.69-6.29-.74-9.43,0-1.27,0-2.47,0-2.91-.09-3.2-.39-6.57-.16-9.76-.68,9.73,0-1.09.06-2.64.13-6.53.38-13.06.71-19.59.16-3.27.35-6.54.54-9.8.09-1.5.19-3,.29-4.49,0-.55.09-1.36.17-2.5,4.62-61.69,9.81-124.2-1.33-185.54-4.37-24-10.47-52.47-29.37-69.69-16.33-14.88-38.46-17.28-59.43-13.47-23.21,4.22-45.36,14.4-66.56,24.4q-12.43,5.87-24.58,12.32,7-9.39,14-18.79c53.71-72.27,107.59-144.9,155.79-221,26.65-42.07,51-85.49,72-130.66,2.94-6.32,3.1-16.84,3.35-23.46l0-.85C903.9,197.24,982.56,339.6,982.56,500,982.56,766.08,766.08,982.56,500,982.56ZM718,797.25l.05.22C717.42,796.33,716.87,795.09,718,797.25Z"
              />
              <path
                className="cls-1"
                d="M507.58,201.43c0-.18.05-.39.09-.62l-.09-.24C507.57,201,507.57,201.23,507.58,201.43Z"
              />
              <path
                className="cls-1"
                d="M507.6,201.72c0-.07,0-.16,0-.29C507.35,203.11,507.47,202.73,507.6,201.72Z"
              />
              <path
                className="cls-1"
                d="M507.77,201.14a1.7,1.7,0,0,0,.19.6.57.57,0,0,1,0-.13l-.05,0c0-.19-.09-.35-.13-.49h0v0l0-.12v0l0-.08c0,.3-.06.58-.1.83S507.72,201.72,507.77,201.14Z"
              />
              <path
                className="cls-1"
                d="M507.76,198.72a9.7,9.7,0,0,1,0,1.52l0-.1a4.6,4.6,0,0,0,0,.71l0,.14A14.47,14.47,0,0,0,507.76,198.72Z"
              />
              <path
                className="cls-1"
                d="M507.78,201a.28.28,0,0,0,0,.09l.12.32C507.85,201.25,507.81,201.12,507.78,201Z"
              />
            </g>
          </svg>
        </NavHashLink>

        <div
          className={isMenuOpen ? "menu-btn show" : "menu-btn"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="menu-text">{isMenuOpen ? "close" : "menu"}</span>
          <div className="menu-bars">
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
        </div>
        {isMenuOpen ? (
          <div className="overlay" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : undefined}
        <nav id="navigation" className={isMenuOpen ? "show" : undefined}>
          <ul>
            <li>
              <NavHashLink
                to="/#home"
                className="nav-item"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Home
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/#projects"
                className="nav-item"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Projects
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/#about"
                className="nav-item"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                About Me
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                to="/#contact"
                className="nav-item"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Contact
              </NavHashLink>
            </li>
            <li id="theme-switch">
              <label
                id="light"
                className={!isThemeDark ? "active" : undefined}
                htmlFor="checkbox"
              >
                light
              </label>
              <label className="toggle" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={isThemeDark}
                  onChange={() => setIsThemeDark(!isThemeDark)}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
                <span className="slider round" />
              </label>
              <label
                id="dark"
                className={isThemeDark ? "active" : undefined}
                htmlFor="checkbox"
              >
                dark
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
