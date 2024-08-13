import React from "react";
import CartCount from "@/components/ui/cart-count";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-[1400px] w-full mx-auto py-4 flex items-center justify-between bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 shadow-lg">
      <div className="text-blue-700 font-bold text-xl italic">
        <Link href="/" legacyBehavior>
          <a className="transition-colors duration-300 hover:text-blue-900 hover:no-underline">
            Profile.fyi Marketplace
          </a>
        </Link>
      </div>
      <CartCount />
    </nav>
  );
};

export default Navbar;
