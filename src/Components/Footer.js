import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" mt-[8rem] h-[2px] w-full bg-black"></div>

      <footer class="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">
          Footer
        </h2>
        <div class="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="xl:col-span-1"></div>
            <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="font-semibold leading-6 uppercase text-black">
                    Company
                  </h3>
                  <ul class="mt-4 space-y-3">
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-blue-600"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-blue-600"
                      >
                        Properties
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-blue-600"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-blue-600"
                      >
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="font-semibold leading-6 uppercase text-black">
                    Contact
                  </h3>
                  <ul class="mt-4 space-y-4">
                    <li>
                      <a
                        href="https://www.facebook.com/121east/"
                        class="text-sm text-gray-500 hover:text-blue-600"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-blue-600"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-blue-600"
                      >
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="hidden lg:justify-end md:grid md:grid-cols-1">
                <div class="w-full mt-12 md:mt-0">
                  <div class="mt-8 lg:justify-end xl:mt-0">
                    <h3 class="font-semibold leading-6 uppercase text-black">
                      Stay Update
                    </h3>
                    <p class="mt-4 text-sm font-light text-gray-500 lg:ml-auto">
                      The latest news, articles, and resources, sent to your
                      inbox weekly.
                    </p>
                    <div class="inline-flex items-center gap-2 mt-12 list-none lg:ml-auto">
                      <form>
                        <div class="w-full sm:relative sm:flex sm:items-center">
                          <div class="min-w-0 w-60 shrink">
                            <input
                              type="email"
                              aria-label="Email address"
                              placeholder="Email address"
                              autocomplete="email"
                              required=""
                              class="block w-full p-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                            />
                          </div>
                          <button
                            class="relative inline-flex justify-center flex-none px-3 py-3 ml-1 overflow-hidden text-sm font-medium text-white transition-colors bg-black rounded-xl outline-2 outline-offset-2 before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors"
                            type="submit"
                          >
                            <span class="inline">Join us!</span>
                          </button>
                        </div>
                      </form>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
          <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
            <span class="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
              <a
                href="/"
                class="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span class="sr-only"> github</span>
                <ion-icon
                  class="w-5 h-5 md hydrated"
                  name="logo-github"
                  aria-label="logo github"
                ></ion-icon>
              </a>
              <a
                href="/"
                class="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span class="sr-only"> twitter</span>
                <ion-icon
                  class="w-5 h-5 md hydrated"
                  name="logo-twitter"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
              <a
                href="/"
                class="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span class="sr-only">Instagram</span>
                <ion-icon
                  class="w-5 h-5 md hydrated"
                  name="logo-instagram"
                  aria-label="logo instagram"
                ></ion-icon>
              </a>
              <a
                href="/"
                class="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span class="sr-only">Linkedin</span>
                <ion-icon
                  class="w-5 h-5 md hydrated"
                  name="logo-linkedin"
                  aria-label="logo linkedin"
                ></ion-icon>
              </a>
            </span>
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <span class="mt-2 text-sm font-light text-gray-500">
              Copyright © 2022 - 2023
              <a
                href="/"
                class="mx-2 text-wickedblue hover:text-gray-500"
                rel="noopener noreferrer"
              >
                EAST Development Inc
              </a>
              .All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
