import React, { useEffect, useState } from "react";
import styles from "./TableOfContents.module.css";
import TableOfContents from "./TableOfContents";
import ContentBody from "./ContentBody";
import { FaBars } from "react-icons/fa";

const Content = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        {/* Menu Icon (visible on small screens) */}
        <div className={styles.menuBar}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <FaBars
              size={36}
              className={styles.menuIcon}
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className={styles.mainContent}>
          <h1 id="title">Welcome to Accessibility Mentor</h1>
          <ContentBody />
        </div>
      </div>

      <aside
        className={`${styles.widget} ${
          showMenu && windowWidth <= 991 ? styles.visible : ""
        }`}
      >
        <TableOfContents toggleMenu={toggleMenu} />
      </aside>
    </div>
  );
};

export default Content;
