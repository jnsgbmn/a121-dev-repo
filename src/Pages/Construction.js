import React from "react";
import pic8 from "../images/pic8.png";
import pic9 from "../images/pic9.png";
import pic10 from "../images/pic10.png";
import pic11 from "../images/pic11.png";
import pic12 from "../images/pic12.png";
import pic13 from "../images/pic13.png";


const Construction = () => {
  return (
    <React.Fragment>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          <div class="grid grid-cols-2 col-span-2 gap-4 lg:grid-cols-3">
            <figure>
              <img
                class="w-full bg-gray-200 h-[365px]"
                src={pic8}
                alt=""
                width="1310"
                height="900px"
              />
            </figure>
            <figure class="">
              <img
                class="w-full bg-gray-200 h-[365px]"
                src={pic9}
                alt=""
                width="1310"
                height="873"
              />
            </figure>
            <figure class="">
              <img
                class="w-full bg-gray-200 h-[365px]"
                src={pic10}
                alt=""
                width="1310"
                height="873"
              />
            </figure>
            <figure class="">
              <img
                class="w-full bg-gray-200 h-[365px]"
                src={pic11}
                alt=""
                width="1310"
                height="873"
              />
            </figure>
            <figure>
              <img
                class="w-full bg-gray-200 h-[365px]"
                src={pic12}
                alt=""
                width="1310"
                height="873"
              />
            </figure>

            <figure class="">
              <img
                class="w-full bg-gray-200 h-[365px]"
                src={pic13}
                alt=""
                width="1310"
                height="873"
              />
            </figure>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Construction;
