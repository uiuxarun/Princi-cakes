import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import Cart from "../../container/cart/Cart";
import Search from "../Search/Search";
import { Context } from "../../utils/context";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useNavigate  } from "react-router-dom";

const auth = getAuth(app);

const Navbar = () => {
  const navigate  = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    scroll.scrollToTop({ duration: 0 });
  };

  useEffect(() => {
    const navbar = document.querySelector(".app_navbar");
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);

      if (window.scrollY > 0) {
        navbar.classList.remove("app_navbar_transparent");
      } else {
        navbar.classList.add("app_navbar_transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
      });
  };

  return (
    <>
      <nav className={`app_navbar ${visible ? "visible" : "hidden"}`}>
        <div className="app_navbar-logo">
        <a href='/'> <img src={images.logo} alt="app_logo" /></a>
        </div>

        <ul className="app_navbar-links">
          <li className="navbar_links">
            <Link to="hero" smooth={true} duration={500} >
            <RouterLink to="/">Home</RouterLink>
            </Link>
          </li>
          <li className="navbar_links">
            <Link to="Cakes" smooth={true} duration={500}>
            <RouterLink to="/#Cakes">Cakes</RouterLink>
            </Link>
          </li>
          <li className="navbar_links">
            <Link to="Contact" smooth={true} duration={500}>
            <RouterLink to="/#Contact">Contact</RouterLink>
            </Link>
          </li>
          <li className="navbar_links">
            <Link to="Reviews" smooth={true} duration={500}>
            <RouterLink to="/#Reviews">Reviews</RouterLink>
            </Link>
          </li>
        </ul>

        <div className="app_navbar-icons">
          <div
            className="navbar-icon"
            data-name="Search"
            onClick={() => setShowSearch(true)}
          >
            <SearchRoundedIcon />
          </div>
          <div
            className="navbar-icon"
            data-name="Cart"
            onClick={() => setShowCart(true)}
          >
            <span className="cart-icon">
              <ShoppingCartOutlinedIcon />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
          <div className="app_navbar_mobile_icon">
            <div
              className={`hamburger ${isOpen ? "toggle" : ""}`}
              onClick={handleToggle}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <div
            className="navbar-icon"
            data-name="Logout"
            onClick={handleLogout}
          >
            <LogoutRoundedIcon className="logout" />
          </div>
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <div className="app_navbar-logo">
          <Link to="hero" smooth={true} duration={500}>
            <img src={images.logo} alt="app_logo" style={{ paddingBottom: "2rem" }}/>
          </Link>
        </div>
          <li>
            <Link to="hero" smooth={true} duration={500} onClick={handleLinkClick} >
              <RouterLink to="/">Home</RouterLink>
            </Link>
          </li>
          <li>
            <Link to="Cakes" smooth={true} duration={500} onClick={handleLinkClick} >
              <RouterLink to="/#Cakes">Cakes</RouterLink>
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={500} onClick={handleLinkClick}>
               <RouterLink to="/#Contact">Contact</RouterLink>
            </Link>
          </li>
          <li>
            <Link to="Reviews" smooth={true} duration={500} onClick={handleLinkClick} >
              <RouterLink to="/#Reviews">Reviews</RouterLink>
            </Link>
          </li>
          <li onClick={handleLogout}>
            <LogoutRoundedIcon
              style={{ color: "var(--light-color)", fontSize: "2.4rem" }}
            />
            &nbsp; Logout
          </li>
        </ul>
      </nav>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Navbar;
