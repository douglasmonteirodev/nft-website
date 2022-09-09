import { useState, useEffect } from "react";
import "./header.css";

import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
  {
    display: "Home",
    url: "/home",
  },
  {
    display: "Market",
    url: "/market",
  },
  {
    display: "Create",
    url: "/create",
  },
  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const [headerShrink, setHeaderShrink] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 80 ? setHeaderShrink(true) : setHeaderShrink(false);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <header className={headerShrink ? "header header__shrink" : "header"}>
      <Container>
        <div className='navigation'>
          <div className='logo'>
            <h2 className='d-flex gap-2 align-items-center'>
              <span>
                <i className='ri-fire-fill'></i>
              </span>
              NFTs
            </h2>
          </div>

          <div className='nav__menu'>
            <div className='nav__list'>
              {NAV__LINKS.map((item, index) => (
                <li className='nav__list' key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>

          <div className='nav__right d-flex align-items-center gap-5'>
            <button className='btn d-flex gap-2 align-items-center'>
              <span>
                <i className='ri-wallet-line'></i>
              </span>
              <Link to='/wallet'>Connect Wallet</Link>
            </button>

            <span className='mobile__menu'>
              <i className='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
