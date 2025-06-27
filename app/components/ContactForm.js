"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.queryType ||
      !formData.message ||
      !formData.consent
    ) {
      toast.error("Please fill in all required fields and consent.");
      setLoading(false);
      return;
    }

    try {
      console.log("submitting data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data submitted:", formData);
      toast.success(
        "Message Sent! Thanks for completing the form. We'll be in touch soon!",
        { duration: 5000 }
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      toast.error("An error occurred during submission (simulated).");
      console.error("Simulated submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[350px] h-[900px] p-7 bg-white rounded-xl shadow-2xl lg:w-[1000px] lg:p-10">
      <form onSubmit={handleSubmit}>
        {/* Name fields */}
        <div className="lg:flex lg:w-[100%] lg:justify-between">
          <div className="w-[100%] h-[90px] lg:flex lg:flex-col lg:w-[95%] lg:mr-[5%]">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2 cursor-pointer"
            />
          </div>
          <div className="w-[100%] h-[90px] lg:flex lg:flex-col ">
            <label htmlFor="lastName" id="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2 cursor-pointer"
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
            onChange={handleChange}
            required
            className="w-[100%] h-[40px] border-1 border-gray-500 rounded-lg mt-2 cursor-pointer"
          />
        </div>

        {/* Query field */}
        <div className="flex flex-col mt-2">
          <p>Query Type</p>
          <div className="lg:flex lg:items-center">
            <div className="w-[100%] h-[60px] flex items-center border-gray-400 border-1 rounded-xl p-2 mt-2 lg:w-[95%] lg:mr-[5%]">
              <input
                type="radio"
                id="radioGeneralEnquiry"
                name="queryType"
                value="general_enquiry"
                onChange={handleChange}
                checked={formData.queryType === "general_enquiry"}
                className="w-[25px] h-[25px] border-1 border-gray-500 rounded-lg mr-3"
              />
              <label htmlFor="radioGeneralEnquiry" className="cursor-pointer">
                General Enquiry
              </label>
            </div>
            <div className="w-[100%] h-[60px] flex items-center  border-gray-400 border-1 rounded-xl p-2 mt-3 lg:mt-2">
              <input
                type="radio"
                id="radioSupportRequest"
                name="queryType"
                value="support_request"
                onChange={handleChange}
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
            onChange={handleChange}
            className="w-[100%] h-[150px] border-1 border-gray-400 rounded-xl mt-3 p-5"
          ></textarea>
        </div>

        {/* Consent Field */}
        <div className="flex items-center mt-5 cursor-pointer">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            required
            className="w-[25px] h-[25px] border-1 border-gray-500 rounded-lg mr-3 cursor-pointer"
          />
          <label htmlFor="consent" className="text-[18px] cursor-pointer">
            I consent to being contacted by the team
          </label>
        </div>

        <button
          type="submit"
          className="w-[100%] h-[50px] mt-6 bg-green-700 rounded-xl text-white hover:bg-green-950 cursor-pointer"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
