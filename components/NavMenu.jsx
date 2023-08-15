import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <nav className="text-center">
      <ul>
        <li className="space-x-2 my-5 font-bold text-3xl">
          <Link href="/blogs">All Blogs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
