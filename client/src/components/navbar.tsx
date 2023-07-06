import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./context/context";

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  const [logState, setLogState] = useContext(UserContext);

  const handleLogOut = () => {
    setLogState({
      data: null,
      loading: false,
      error: null,
    });
    localStorage.removeItem("token");
  };

  return (
    <div
      className={`${
        path === "/" ? "absolute top-0 text-white" : "relative text-gray-900"
      } w-[100vw]`}
    >
      <header className="bg-transparent">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink
              to="articles-plans"
              className="text-sm font-semibold leading-6 "
            >
              Plans
            </NavLink>

            <a href="#" className="text-sm font-semibold leading-6 ">
              Features
            </a>
            <a href="#" className="text-sm font-semibold leading-6 ">
              Marketplace
            </a>
            <a href="#" className="text-sm font-semibold leading-6 ">
              Company
            </a>
          </div>
          {!logState.data ? (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink to="/login" className="text-sm font-semibold leading-6 ">
                Log in <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <NavLink
                to="/"
                className="text-sm font-semibold leading-6 "
                onClick={handleLogOut}
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
