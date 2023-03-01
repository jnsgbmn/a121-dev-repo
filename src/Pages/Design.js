import React from "react";
import img1 from "../images/interior-design.webp";
import img2 from "../images/plumb-1-design.webp";
import img3 from "../images/struct-1-design.webp";
import img4 from "../images/ict-design.webp";
import img5 from "../images/ld-design.webp";



const Design = () => {
    return (
      <React.Fragment>
        <div>
            <div className=" justify-center">
                  <h1 className="flex justify-center md:text-2xl sm:text-3xl font-h1  py-2 lg:justify-start">
                    Design Field
                  </h1>
                </div>
                <div className=" gap-8  mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
                <img src={img5} className="   mx-auto my-4 w-[184px][" alt="/" />
                <div className=" flex flex-col justify-center">
                  <h1 className="md:text-2xl sm:text-3xl font-h1  py-2">
                    Land Development
                  </h1>
                  <p className=" text-sm font-p ">
                    Master Planning of Town Halls, Urban Subdivisions, Resorts, and Industrial Plants 
                  </p>
                </div>
              </div>
            <div className="mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-2xl sm:text-3xl font-h1  py-2">
                         Architectural / Interior Design
                    </h1>
                    <p className="text-sm  font-p ">
                        Concept Design, Floor Plans and Perspectives of Buildings.
                        House, Store, and Office Interior Fit-outs  
                    </p>
                </div>
                    <img
                        src={img1}
                        className=" pr-5  mx-auto my-4 w-[184px]["
                        alt="/"
                    />
              </div>
              
              <div className=" gap-8  mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
                <img src={img2} className="   mx-auto my-4 w-[184px][" alt="/" />
                <div className=" flex flex-col justify-center">
                  <h1 className="md:text-2xl sm:text-3xl font-h1  py-2">
                    Electrical / Plumbing
                  </h1>
                  <p className=" text-sm font-p ">
                    High Voltage and Low Voltage Design, Building Plumbing and Sanitary Design
                  </p>
                </div>
              </div>
  
              <div className="mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                  <h1 className="md:text-2xl sm:text-3xl font-h1  py-2">
                    Structural Engineering
                  </h1>
                  <p className="text-sm  font-p ">
                    Structural Analysis and Structure Integrity Assessment 
                  </p>
                </div>
                <img
                  src={img3}
                  className=" pr-5  mx-auto my-4 w-[184px]["
                  alt="/"
                />
              </div>
  
              <div className="gap-8 mt-[100px] max-w-[800px] mx-auto grid md:grid-cols-2">
                <img src={img4}
                  className=" pr-5  mx-auto my-4 w-[184px]["
                  alt="/"
                />
                <div className=" flex flex-col justify-center">
                  <h1 className=" md:text-2xl sm:text-3xl font-h1  py-2">
                    ICT
                  </h1>
                  <p className="text-sm font-p ">
                    Network Structure, CCTV, and Public Address 
                  </p>
                </div>
              </div>
        </div>
      </React.Fragment>
    );
  };
  
  export default Design;
  