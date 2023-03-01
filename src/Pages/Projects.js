import React from "react";
import pic1 from "../images/pic1.webp";
import pic2 from "../images/pic2.webp";
import pic3 from "../images/pic3.webp";
import pic4 from "../images/pic4.webp";
import pic5 from "../images/pic5.webp";
import pic6 from "../images/pic6.webp";

const Projects = () => {
  return (
    <React.Fragment>
      <div class="relative items-center w-full px-5 pb-12 mx-auto my-12 md:px-12 lg:px-16 max-w-7xl">
        <img class="w-full bg-gray-300 " src={pic3} alt="" />
      </div>
      <section>
        <div class="flex flex-col justify-center flex-1 px-8 py-8 mx-auto lg:py-24 md:px-12 lg:flex-none lg:px-24 max-w-7xl">
          <div class="max-w-2xl">
            <div>
              <p class="text-5xl tracking-tight text-black ">
                I am a slightly longer heading than the others
              </p>
              <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                If you could kick the person in the pants responsible for most
                of your trouble, you wouldn't sit for a month
              </p>
            </div>
          </div>
          <div class="mx-auto mt-12 text-left">
            <h2 class="sr-only">intro.</h2>
            <div>
              <div class="grid grid-cols-1 text-sm gap-x-2 gap-y-14 lg:grid-cols-2 lg:gap-36">
                <article>
                  <div class="space-y-3">
                    <div class="gap-2 lg:inline-flex lg:items-center"></div>
                    <p class="mt-2 text-base text-gray-500">
                      With the ability to share code, track changes and provide
                      feedback, you'll be able to complete projects faster.
                    </p>
                  </div>
                </article>
                <article>
                  <div class="space-y-3">
                    <div class="gap-2 lg:inline-flex lg:items-center"></div>
                    <p class="mt-2 text-base text-gray-500">
                      That's why we've made our SaaS programming product
                      available at a price that's affordable for everyone
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex items-center w-full bg-white">
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div class="grid grid-cols-2 gap-6 py-12 md:grid-cols-3">
            <figure>
              <img
                class="h-[250px] w-full bg-gray-200 "
                src={pic1}
                alt=""
                width="1310"
                height="873"
              />

              <p class="mt-5 text-lg font-medium leading-6 text-black">
                Pink dreams
              </p>
              <p class="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
            </figure>
            <figure>
              <img
                class=" h-[250px] w-full bg-gray-200 "
                src={pic2}
                alt=""
                width="1310"
                height="873"
              />

              <p class="mt-5 text-lg font-medium leading-6 text-black">
                Lavender ender
              </p>
              <p class="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
            </figure>
            <figure>
              <img
                class="h-[250px] w-full bg-gray-200 "
                src={pic3}
                alt=""
                width="1310"
                height="873"
              />

              <p class="mt-5 text-lg font-medium leading-6 text-black">
                Smurf life
              </p>
              <p class="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
            </figure>
          </div>
        </div>
      </section>
      <section class="flex items-center w-full bg-white">
        <div class="relative items-center w-full px-5  mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div class="grid grid-cols-2 gap-6 py-12 md:grid-cols-3">
            <figure>
              <img
                class="h-[250px] w-full bg-gray-200 "
                src={pic4}
                alt=""
                width="1310"
                height="873"
              />

              <p class="mt-5 text-lg font-medium leading-6 text-black">
                Pink dreams
              </p>
              <p class="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
            </figure>
            <figure>
              <img
                class=" h-[250px] w-full bg-gray-200 "
                src={pic5}
                alt=""
                width="1310"
                height="873"
              />

              <p class="mt-5 text-lg font-medium leading-6 text-black">
                Lavender ender
              </p>
              <p class="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
            </figure>
            <figure>
              <img
                class="h-[250px] w-full bg-gray-200 "
                src={pic6}
                alt=""
                width="1310"
                height="873"
              />

              <p class="mt-5 text-lg font-medium leading-6 text-black">
                Smurf life
              </p>
              <p class="mt-3 text-base text-gray-500">
                Your design portfolio website shouldn’t just be a portfolio, it
                should also be a sales tool.
              </p>
            </figure>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
