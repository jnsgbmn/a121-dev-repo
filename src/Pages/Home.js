import React from "react";
import hero from "../images/hero.png";
import img1 from "../images/1.webp";
import img2 from "../images/2.webp";
import img3 from "../images/3.webp";
import img4 from "../images/4.webp";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <div className=" relative">
          <img src={hero} className="w-full" alt="/" />
          <h1 class=" w-full text-center font-h1 absolute text-[60px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Crafting a better tomorrow
          </h1>
          <p class=" mt-12 font-p absolute text-1xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Design & Engineering Consultancy and
          </p>
          <p class=" mt-[70px] font-p absolute text-1xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Construction Company. 
          </p>
        </div>
        <div>
          <div id="project" className=" pt-[50px] w-full h-full bg-white  px-4">
            <div className="max-w-[800px] mx-auto grid md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="md:text-2xl sm:text-3xl font-h1  py-2">
                  We Design & Build Strategically
                </h1>
                <p className=" font-p text-sm ">
                  Architects and Engineers collaborate ideas based on their best
                  practices local and abroad.
                </p>
              </div>
              <img
                src={img1}
                className=" pr-5 mx-auto my-4 w-[184px]["
                alt="/"
              />
            </div>

            <div className=" gap-8  mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
              <img src={img2} className="   mx-auto my-4 w-[184px][" alt="/" />
              <div className=" flex flex-col justify-center">
                <h1 className="md:text-2xl sm:text-3xl font-h1  py-2">
                  International Standard
                </h1>
                <p className=" text-sm font-p ">
                  The Company follows International Standard and Practices.
                </p>
              </div>
            </div>

            <div className="mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h1 className="md:text-2xl sm:text-3xl font-h1  py-2">
                  Safety and Comfort
                </h1>
                <p className="text-sm  font-p ">
                  Customers safety and comfort is our major concern.
                </p>
              </div>
              <img
                src={img3}
                className=" pr-5  mx-auto my-4 w-[184px]["
                alt="/"
              />
            </div>

            <div className=" gap-8 mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
              <img
                src={img4}
                className=" justify-center  mx-auto my-4 w-[184px]["
                alt="/"
              />
              <div className=" flex flex-col justify-center">
                <h1 className=" md:text-2xl sm:text-3xl font-h1  py-2">
                  Sustainability
                </h1>
                <p className="text-sm font-p ">
                  A Storm & Earthquake Proof Structure is bound to last longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
