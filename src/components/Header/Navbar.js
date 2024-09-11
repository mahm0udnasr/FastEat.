import "./Header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from "../../context/sidebarContext";

const Navbar = () => {
  const { isSidebarOpen,openSidebar, closeSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);
  function menuBtnClickHundel() {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <nav
      className={`navbar bg-orange flex align-center ${
        scrolled ? "scrolled" : null
      }`}
    >
      <div className="container w-100">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler flex align-center justify-between">
            <Link to="/" className="navbar-brand fw-3 fs-22 flex align-center">
              <MdFoodBank />
              <span className="navbar-brand-text fw-7">FastEat.</span>
            </Link>
            <div className="navbar-btns flex align-center">
              <button type="button" className="navbar-show-btn text-white">
                <IoMdMenu size={27} onClick={() => menuBtnClickHundel()} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
