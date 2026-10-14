
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import logo from "../../../../../assets/logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 transition ${
      isActive
        ? "text-brand-primary font-semibold"
        : "text-gray-700 hover:text-brand-primary"
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative z-50 w-full bg-white shadow-brand-sm">
      {/* Main navbar */}
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">

        {/* Logo */}
        <NavLink to="/" onClick={closeMenu} className="shrink-0">
          <img
            src={logo}
            alt="Roomly logo"
            className="h-8 w-auto sm:h-10"
          />
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Search properties"
            className="rounded-md p-2 hover:bg-gray-100"
          >
            <Search className="h-5 w-5" />
          </button>

          <NavLink
            to="/login"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="rounded-md bg-brand-primary px-4 py-2 text-sm text-white shadow-md"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            aria-label="Search properties"
            className="rounded-md p-2 hover:bg-gray-100"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-md p-2 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown — outside the main flex row */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            <NavLink to="/" end onClick={closeMenu} className={linkClass}>
              Home
            </NavLink>

            <NavLink
              to="/properties"
              onClick={closeMenu}
              className={linkClass}
            >
              Properties
            </NavLink>

            <NavLink
              to="/how-it-works"
              onClick={closeMenu}
              className={linkClass}
            >
              How it Works
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={linkClass}
            >
              About
            </NavLink>

            <div className="mt-2 flex gap-3 border-t border-gray-100 pt-3">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-center text-sm"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                onClick={closeMenu}
                className="flex-1 rounded-md bg-brand-primary px-4 py-2 text-center text-sm text-white"
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
