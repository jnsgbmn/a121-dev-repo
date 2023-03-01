import React from "react";
import { NavLink } from "react-router-dom";
import "flowbite";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav class=" bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class=" container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="  column items-center">
            <h1 className="   font-h1  mb- text-center ">121 </h1>
            <h1 className=" font-h1 ">EAST</h1>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover: dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class=" hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class=" bg-white flex flex-col p-4 mt-4 border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:bord">
              <li>
                <NavLink to="/">
                  <a
                    href="/#"
                    class=" font-h1 block py-2 pl-3 pr-4 rounded md:bg-transparent md:te md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/project">
                  <p class="font-h1 block py-2 pl-3 pr-4 te rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:t md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent">
                    Projects
                  </p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/restoration">
                  <p class="font-h1 block py-2 pl-3 pr-4 te rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:t md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent">
                    Services
                  </p>
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact">
                  <p class="font-h1 block py-2 pl-3 pr-4 te rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:t md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent">
                    Career
                  </p>
                </NavLink>
              </li>
              <li>
                <a
                  href="/history"
                  class=" font-h1 block py-2 pl-3 pr-4 te rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:t md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover: dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
