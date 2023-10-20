import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="nav-header">
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
