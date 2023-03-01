import React from "react";
import { NavLink } from "react-router-dom";
import "flowbite";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="  column items-center">
            <h1 className="   font-h1  mb- text-center ">121 </h1>
            <h1 className=" font-h1 ">EAST</h1>
          </a>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/">
                  <a
                    href="/#"
                    class=" font-h1 block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/project">
                  <p class="font-h1 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Projects
                  </p>
                </NavLink>
              </li>

              <li>
                <button
                  id="dropdownNavbarButton"
                  data-dropdown-toggle="dropdownNavbar"
                  class=" font-h1 flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services{" "}
                  <svg
                    class="w-4 h-4 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  class="z-10  hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownNavbarButton"
                  >
                    <li>
                      <NavLink to="/design">
                        <a
                          href="/"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Design
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/construction">
                        <a
                          href="/"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Construction
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/restoration">
                        <a
                          href="/"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Restoration
                        </a>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink to="/contact">
                  <p class="font-h1 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    Career
                  </p>
                </NavLink>
              </li>
              <li>
                <a
                  href="/history"
                  class=" font-h1 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
