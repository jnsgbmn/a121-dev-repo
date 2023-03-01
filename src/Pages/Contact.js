import { useRef as UseRef } from "react";
import React from "react";
import emailjs from "@emailjs/browser";
import "flowbite";

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fj55nb2",
        "template_lvvee2q",
        form.current,
        "ozIXdFs_YFIgF_sxX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form class=" bg-white dark:bg-gray-900">
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
        <form ref={form} onSubmit={sendEmail} class="space-y-8">
          <div>
            <label
              for="email"
              class=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              name="user_name"
              type="text"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div>
            <label
              for="name"
              class=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              name="user_email"
              type="name"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
              name="message"
              id="message"
              rows="6"
              class=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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

          <input
            class=" cursor-pointer rounded-md bg-gray-200 py-3 px-5 text-sm font-medium text-center text-black   bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            value="Send"
            type="submit"
          />
        </form>
      </div>
    </form>
  );
};

export default contact;
