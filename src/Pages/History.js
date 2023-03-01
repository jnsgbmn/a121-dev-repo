import React from "react";
import bg from "../images/bg.webp";

const History = () => {
  return (
    <React.Fragment>
      <div className="">
        <div class="relative flex items-center w-full bg-white">
          <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="relative flex-col items-start m-auto align-middle">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div class="relative items-center gap-12 m-auto lg:inline-flex">
                  <div class="max-w-xl text-center lg:text-left">
                    <div>
                      <p class="text-4xl tracking-tighter text-black lg:text-5xl">
                        I am a short heading
                      </p>
                      <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                        121East provides superior construction services,
                        ingenious design proposals, and technical
                        expertise—achieving time efficient project deliveries.
                      </p>{" "}
                    </div>
                    <div class="flex justify-center gap-3 mt-10 lg:justify-start">
                      <a
                        class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                        href="/"
                      >
                        <span>Send Message</span>
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
                    class="h-[500px] object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto"
                    alt="hero"
                    src={bg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex items-center w-full bg-white">
          <div class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
            <div class="relative flex-col items-start m-auto align-middle">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                <div class="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                  <div class="max-w-xl text-center lg:text-left">
                    <div>
                      <p class="text-4xl tracking-tighter text-black lg:text-5xl">
                        I am a short heading
                      </p>
                      <p class="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                        Our SaaS programming product offers a powerful platform
                        that makes coding easier, faster and more efficient.We
                        understand the fast-paced nature of the tech industry,
                        and our software is built to keep up.
                      </p>{" "}
                    </div>
                    <div class="flex justify-center gap-3 mt-10 lg:justify-start">
                      <a
                        class="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                        href="/"
                      >
                        <span>Read more</span>
                        <ion-icon
                          class="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated"
                          name="arrow-forward-outline"
                          aria-label="arrow forward outline"
                        ></ion-icon>
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div class="order-first block w-full mt-12 aspect-square lg:mt-0">
                  <iframe
                    title="Intentionally blank"
                    width="540"
                    height="511"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Pacita%20Building%20Km.7,%20Mc%20Arthur%20%20Highway,%20Bangkal,%20Davao%20%20Bangkal,%20Davao&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
