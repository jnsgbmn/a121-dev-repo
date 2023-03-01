import React from "react";
import pic from "../images/pic14.webp";
import pic1 from "../images/pic15.webp";
import pic2 from "../images/pic16.webp";
import pic3 from "../images/pic17.webp";
import pic4 from "../images/pic18.webp";
import pic5 from "../images/pic19.webp";
import pic6 from "../images/pic20.webp";
import pic7 from "../images/pic21.webp";
import pic8 from "../images/pic22.webp";

const Restoration = () => {
  return (
    <div>
      <div>
        <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div class="grid grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
            <div class="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-1 md:col-span-3 lg:col-span-2">
              <figure>
                <img
                  class="w-full bg-gray-200 h-[360px]"
                  src={pic}
                  alt=""
                  width="1310"
                  height="873"
                />
              </figure>
              <figure>
                <img
                  class="w-full bg-gray-200 h-[360px]"
                  src={pic1}
                  alt=""
                  width="1310"
                  height="873"
                />
              </figure>
            </div>
            <figure class="lg:col-span-4">
              <img
                class="w-full bg-gray-200 h-[745px]"
                src={pic2}
                alt=""
                width="1310"
                height="873"
              />
            </figure>
          </div>
        </div>
      </div>
      <div>
        <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div class="grid grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
            <figure class="lg:col-span-4">
              <img
                class="w-full bg-gray-200 h-[745px]"
                src={pic3}
                alt=""
                width="1310"
                height="873"
              />
            </figure>
            <div class="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-1 md:col-span-3 lg:col-span-2">
              <figure>
                <img
                  class="w-full bg-gray-200 h-[370px]"
                  src={pic4}
                  alt=""
                  width="1310"
                  height="873"
                />
              </figure>
              <figure>
                <img
                  class="w-full bg-gray-200 h-[360px]"
                  src={pic5}
                  alt=""
                  width="1310"
                  height="873"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="relative items-center w-full px-5 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div class="grid grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
            <div class="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-1 md:col-span-3 lg:col-span-2">
              <figure>
                <img
                  class="w-full bg-gray-200 h-[360px]"
                  src={pic6}
                  alt=""
                  width="1310"
                  height="873"
                />
              </figure>
              <figure>
                <img
                  class="w-full bg-gray-200 h-[360px]"
                  src={pic7}
                  alt=""
                  width="1310"
                  height="873"
                />
              </figure>
            </div>
            <figure class="lg:col-span-4">
              <img
                class="w-full bg-gray-200 h-[745px]"
                src={pic8}
                alt=""
                width="1310"
                height="873"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restoration;
