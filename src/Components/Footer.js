import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="  h-[2px] w-full bg-black"></div>

      <footer class="bg-[#F3E8D9] " aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">
          Footer
        </h2>
        <div class="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-15 lg:px-20">
          <div class=" xl:grid-cols-3 xl:gap-8">
            <div class="xl:col-span-1"></div>
            <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div class="w-[650px] md:grid md:grid-cols-3 md:gap-9">
                <div>
                  <h3 class="font-semibold leading-6 uppercase text-black">
                    Company
                  </h3>
                  <ul class="mt-4 space-y-3">
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-red-600"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-red-600"
                      >
                        Properties
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        class="text-sm text-gray-500 hover:text-red-600"
                      >
                        About Us
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
                        class="text-sm text-gray-500 hover:text-red-600"
                      >
                        Facebok
                      </a>
                    </li>
                    <li>
                      <a
                        href="/history"
                        class="text-sm text-gray-500 hover:text-red-600"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/location"
                        class="text-sm text-gray-500 hover:text-red-600"
                      >
                        Location
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <ul class="mt-4 space-y-4">
                    <li>
                      <a class="text-sm text-gray-500">
                        D2,Pacita Building Km.7, Mc Arthur
                      </a>
                    </li>
                    <li>
                      <a class="text-sm text-gray-500">
                        Highway, Bangkal, Davao
                      </a>
                    </li>
                    <li>
                      <a class="text-sm text-gray-500">Bangkal, Davao</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 py-12 mx-auto border-t max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
          <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0"></div>
          <div class="mt-8 md:mt-0 md:order-1">
            <span class="mt-2 text-sm font-light text-gray-500">
              Copyright © 2022 - 2023
              <a
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
