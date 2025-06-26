"use client";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  return (
    <div className="w-[350px] h-[900px] p-7 bg-white rounded-xl shadow-2xl">
      <form>
        {/* Name fields */}
        <div>
          <div className="w-[100%] h-[90px]">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              required
              className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2"
            />
          </div>
          <div className="w-[100%] h-[90px]">
            <label htmlFor="lastName" id="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              required
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
            name="email"
            value={formData.email}
            required
            className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2"
          />
        </div>

        {/* Query field */}
        <div className="flex flex-col mt-2">
          <p>Query Type</p>
          <div>
            <div className="w-[100%] h-[60px] flex items-center border-gray-400 border-1 rounded-xl p-2 mt-2">
              <input
                type="radio"
                id="radioGeneralEnquiry"
                name="queryType"
                value="general_enquiry"
                checked={formData.queryType === "general_enquiry"}
                className="w-[25px] h-[25px] border-1 border-gray-500 rounded-lg mr-3"
              />
              <label htmlFor="radioGeneralEnquiry" className="cursor-pointer">
                General Enquiry
              </label>
            </div>
            <div className="w-[100%] h-[60px] flex items-center  border-gray-400 border-1 rounded-xl p-2 mt-3">
              <input
                type="radio"
                id="radioSupportRequest"
                name="queryType"
                value="support_request"
                checked={formData.queryType === "support_request"}
                className="w-[25px] h-[25px] border-1 border-gray-500 rounded-lg mr-3"
              />
              <label htmlFor="radioSupportRequest" className="cursor-pointer">
                Support Request
              </label>
            </div>
          </div>
        </div>

        {/* Message field */}
        <div className="mt-5">
          <p>Message</p>
          <textarea
            required
            name="message"
            id="message"
            value={formData.message}
            className="w-[100%] h-[150px] border-1 border-gray-400 rounded-xl mt-3"
          ></textarea>
        </div>

        {/* Consent Field */}
        <div className="flex items-center mt-5">
          <input
            id="concent"
            name="concent"
            type="checkbox"
            checked={formData.consent}
            className="w-[25px] h-[25px] border-1 border-gray-500 rounded-lg mr-3"
          />
          <label htmlFor="concent" className="text-[18px]">
            I consent to being contacted by the team
          </label>
        </div>

        <button className="w-[100%] h-[50px] mt-6 bg-green-700 rounded-xl text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
