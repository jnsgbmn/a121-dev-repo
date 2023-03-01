import React from "react";
import hero from "../images/hero.png";

import img4 from "../images/1.png";

import img5 from "../images/plumber (1).png";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <div className=" relative">
          <img src={hero} className=" h-[700px] w-full" alt="/" />
          <h1 class=" w-full text-center font-h1 absolute text-[80px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Crafting a better tomorrow
          </h1>
          <p class=" mt-12 font-p absolute text-1xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Design & Engineering Consultancy and
          </p>
          <p class=" mt-[70px] font-p absolute text-1xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Construction Company.
          </p>
        </div>

        <div class="bg-[#E6F7F2] relative flex items-center w-full ">
          <div class="relative items-center w-full px-5 py-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="relative flex-col items-start m-auto align-middle">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                  <div class="max-w-xl text-center lg:text-left">
                    <div>
                      <p class=" font-h1 text-[#33411c] text-4xl font-medium tracking-tighter  sm:text-4xl">
                        I am a short heading
                      </p>
                      <p class=" text-[#33411c] max-w-xl mt-4 text-base tracking-tight ">
                        At Monterrazas Prime, human living is our master
                        blueprint. Where you and your needs come first. Our
                        homes are built and designed with people in mind,
                        creating spaces with thoughtful design and careful
                        attention to detail. From the floors you walk on, to the
                        views you wake up to, from every detail you see to those
                        you do not—each element is intentionally designed for a
                        life with no limits. Now that you’ve arrived at where
                        you want to be, you must live the kind of life you
                        rightly deserve: luxurious, laureled, and limitless.
                      </p>{" "}
                    </div>
                    <div class="flex justify-center gap-3 mt-10 lg:justify-start">
                      <a
                        class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                        href="#"
                      >
                        <span>Read more</span>
                        <ion-icon
                          class="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated"
                          name="arrow-forward-outline"
                          role="img"
                          aria-label="arrow forward outline"
                        ></ion-icon>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
                  <img
                    class="object-cover object-center w-full mx-autolg:ml-auto "
                    alt="hero"
                    src={img5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="grid items-center grid-cols-1 gap-12 text-left lg:gap-24 md:grid-cols-2 lg:grid-cols-3">
              <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div class="mx-auto lg:max-w-7xl">
                  <ul
                    role="list"
                    class="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                  >
                    <li>
                      <div>
                        <p class="mt-5 text-lg font-medium leading-6 text-black">
                          We Design and build Strategically
                        </p>
                      </div>
                      <div class="mt-2 text-base text-gray-500">
                        Architects and Engineers collaborate ideas based on
                        their best practices local and abroad.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p class="mt-5 text-lg font-medium leading-6 text-black">
                          International Standard
                        </p>
                      </div>
                      <div class="mt-2 text-base text-gray-500">
                        The Company follows International Standard and
                        Practices.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class=" relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div class="mx-auto lg:max-w-7xl">
                  <ul
                    role="list"
                    class="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                  >
                    <li>
                      <div>
                        <p class="mt-5 text-lg font-medium leading-6 text-black">
                          Safety and Comfort
                        </p>
                      </div>
                      <div class="mt-2 text-base text-gray-500">
                        Customers safety and comfort is our major concern.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p class="mt-5 text-lg font-medium leading-6 text-black">
                          Sustainability
                        </p>
                      </div>
                      <div class="mt-2 text-base text-gray-500">
                        A Storm & Earthquake Proof Structure is bound to last
                        longer.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                <div class="mx-auto lg:max-w-7xl">
                  <ul
                    role="list"
                    class="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                  >
                    <li>
                      <div>
                        <p class="mt-5 text-lg font-medium leading-6 text-black">
                          Easy onboarding
                        </p>
                      </div>
                      <div class="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs.
                      </div>
                    </li>
                    <li>
                      <div>
                        <p class="mt-5 text-lg font-medium leading-6 text-black">
                          Customer support
                        </p>
                      </div>
                      <div class="mt-2 text-base text-gray-500">
                        Plus, our platform is constantly evolving to meet the
                        changing needs.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-[#F3E8D9] mb-[300px]  relative flex items-center w-full">
          <div class="relative items-center w-full mx-auto  ">
            <div class="relative flex-col items-start m-auto align-middle">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div class="relative items-center gap-12 m-auto lg:inline-flex">
                  <div class="max-w-xl text-center lg:text-left">
                    <div>
                      <p class=" font-h1 text-2xl font-medium tracking-tighter text-black sm:text-4xl">
                        I am a short heading
                      </p>
                      <p class="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        Use this paragraph to share information about your
                        company or products. Make it engaging and interesting,
                        and showcase your brand's personality. Thanks for
                        visiting our website!
                      </p>{" "}
                    </div>
                    <div class="flex justify-center gap-3 mt-10 lg:justify-start">
                      <a
                        class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                        href="#"
                      >
                        <span>Read more</span>
                        <ion-icon
                          class="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated"
                          name="arrow-forward-outline"
                          role="img"
                          aria-label="arrow forward outline"
                        ></ion-icon>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div class="order-first block w-full mt-12 aspect-square lg:mt-0 lg:order-first">
                  <img
                    class="h-full object-cover object-center w-full mx-autolg:ml-auto"
                    alt="hero"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
