import React from "react";

const SupportSection = () => {
  return (
    <section className="bg-black ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-slate-200 ">
            Need Help or Assistance?
          </h2>
          <p className="mb-5 font-light text-[#D42978] sm:text-xl ">
            Our support team is here to assist you with any questions or issues
            you may have.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">FAQs</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Check out our Frequently Asked Questions for quick answers to your
              queries.
            </p>
            <button className="text-white bg-[#D42978] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mx-auto block dark:text-white  dark:focus:ring-primary-900">
              Explore FAQs
            </button>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Contact Us</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Reach out to our support team directly for personalized
              assistance.
            </p>
            <button className="text-white bg-[#D42978] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mx-auto block dark:text-white  dark:focus:ring-primary-900">
              Contact Support
            </button>
          </div>
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Community Forums</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Join our community forums to engage with other users and get help.
            </p>
            <button className="text-white bg-[#D42978] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 mt-8 mx-auto block dark:text-white  dark:focus:ring-primary-900">
              Visit Forums
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
