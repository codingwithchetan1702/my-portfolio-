import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    toast.info("Sending...");

    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! We've received your message and will get back to you soon.");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h2 className="my-12 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>

      <form onSubmit={onSubmit}>
        <div className="mb-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-lg border border-stone-50/30 bg-white/5 px-4 py-3 text-sm text-white"
            />
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-lg border border-stone-50/30 bg-white/5 px-4 py-3 text-sm text-white"
            />
          </div>
        </div>

        <div className="mb-8">
          <textarea
            name="message"
            placeholder="Your message"
            rows="6"
            required
            className="w-full rounded-lg border border-stone-50/30 bg-white/5 px-4 py-3 text-sm text-white"
          />
        </div>

        <button
          type="submit"
          className="mb-8 w-full rounded-lg border border-stone-50/30 bg-white/90 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-white"
        >
          Send Message
        </button>
      </form>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Contact;