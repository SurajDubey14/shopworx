import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-black text-white flex justify-between w-full px-4 py-2">
      <Link to={"/"}>
        <div className="logo text-2xl font-mono">SHOPWORX</div>
      </Link>
      <div className="flex justify-between gap-x-10">
        <p>Welcome , mfg Nidhi auto</p>
        <nav>
          <ul className="flex items-center gap-x-10">
            <li>Home</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
