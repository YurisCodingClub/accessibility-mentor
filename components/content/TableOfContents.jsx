import React from "react";
import Link from "next/link";
import styles from "./TableOfContents.module.css";
import { FaTimes } from "react-icons/fa";

const TableOfContents = ({ toggleMenu }) => {
  return (
    <nav aria-label="Table of Content">
      <div className={styles.faTimes}>
        <FaTimes
          role="button"
          aria-label="Close Menu"
          size={32}
          className={styles.menuIcon}
          onClick={toggleMenu}
        />
      </div>
      <details open>
        <summary>Table of Contents</summary>
        <ul>
          <li>
            <Link href="#title">Title</Link>
          </li>
          <li>
            <Link href="#heading1">Heading 1</Link>
          </li>
          <li>
            <Link href="#heading2">Heading 2</Link>
          </li>
          <li>
            <Link href="#heading3">Heading 3</Link>
          </li>
        </ul>
      </details>
    </nav>
  );
};

export default TableOfContents;
