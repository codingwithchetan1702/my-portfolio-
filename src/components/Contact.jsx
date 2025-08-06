import React from 'react'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_ACCESS_KEY;

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! We've received your message and will get back to you soon.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
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
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-full appearance-none rounded-lg border border-stone-50/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full appearance-none rounded-lg border border-stone-50/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
            />
          </div>
        </div>

        <div className="mb-8">
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="6"
            required
            className="w-full appearance-none rounded-lg border border-stone-50/30 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-400"
          />
        </div>

        <button
          type="submit"
          className="mb-8 w-full rounded-lg border border-stone-50/30 bg-white/90 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white"
        >
          Send Message
        </button>
      </form>

      <span className="block text-center text-green-500 text-sm">{result}</span>
    </div>

  )
}

export default Contact