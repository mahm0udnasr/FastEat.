import "./Sidebar.scss";
import { useSidebarContext } from "../../context/sidebarContext";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { useMealContext } from "../../context/mealContext";
import { useEffect } from "react";
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const { categories } = useMealContext();
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar && !sidebar.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, closeSidebar]);

  return (
      <nav className={`sidebar ${isSidebarOpen ? "sidebar-visible" : null}`}>
        <button
          type="button"
          className="navbar-hide-btn"
          onClick={() => closeSidebar()}
        >
          <ImCancelCircle size={24} />
        </button>
        <div className="side-content">
          <ul className="side-nav">
            {categories.map((category, index) => (
              <li key={category.idCategory || index} className="side-item">
                <Link
                  to={`meal/category/${category.strCategory}`}
                  className="side-link ls-1 fs-13"
                  onClick={() => closeSidebar()}
                >
                  {category.strCategory}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
  );
};

export default Sidebar;
