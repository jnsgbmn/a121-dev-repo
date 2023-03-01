import React from "react";
import "flowbite";

const contact = () => {
  return (
    <React.Fragment>
      <section class=" bg-white dark:bg-gray-900">
        <div class="  py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 font-h1 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Join Our Team
          </h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            If you're interested in one of our open positions, start by applying
            here and attaching your resume.
          </p>
          <h2 class="mb-4 font-h1 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Apply Now
          </h2>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="type"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="name"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Email address"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a Message..."
              ></textarea>
            </div>
            <p className=" text-[12px] ">
              Important. Please, attach your CV (Resume/Bio-data) in one of the
              following file formats: doc,docx, pdf. The maximum acceptable file
              size is 10 MB
            </p>

            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
            />

            <button
              type="submit"
              class=" bg-gray-200 py-3 px-5 text-sm font-medium text-center text-black   bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default contact;
