import React from "react";

const ContactForm = () => {
  return (
    <div className="w-[100%] h-[1000px] p-7 bg-white rounded-xl shadow-2xl">
      <form>
        {/* Name fields */}
        <div>
          <div className="w-[100%] h-[90px]">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2"
            />
          </div>
          <div className="w-[100%] h-[90px]">
            <label htmlFor="firstName" id="firstName">
              Last Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2"
            />
          </div>
        </div>
        {/* Emain field */}
        <div className="w-[100%] h-[80px]">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2"
          />
        </div>

        {/* Query field */}
        <div>
          <div className="w-[100%] h-[90px]">
            <label htmlFor="firstName">Query Type</label>
            <input
              type="radio"
              id="firstName"
              className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2"
            />
          </div>
          <div className="w-[100%] h-[90px]">
            <input
              type="radio"
              id="firstName"
              className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
