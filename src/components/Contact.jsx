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
    <div className='p-4'>
      <h2 className='my-12 text-center text-4xl font-semibold
        tracking-tighter'>Let's Connect</h2>

      <form onSubmit={onSubmit}>
        <div className='mb-8 flex space-x-4'>
          <div className='lg:w-1/2'>
            <input type='text'
              id='name'
              name="name"
              placeholder='Name'
              className='mb-8 w-full appearance-none rounded-lg
                     border border-stone-50/30 bg-transparent px-3 py-2
                     text-sm focus:border-stone-400 focus:outline-none'
            />
          </div>
          <div className='lg:w-1/2'>
            <input type='email'
              id='eamil'
              name="email"
              placeholder='Email'
              className='mb-8 w-full appearance-none rounded-lg
                     border border-stone-50/30 bg-transparent px-3 py-2
                     text-sm focus:border-stone-400 focus:outline-none'
            />
          </div>
        </div>
        <div className='mb-8'>
          <textarea
            id='message'
            name="message"
            placeholder='message'
            className='mb-8 w-full appearance-none rounded-lg
                     border border-stone-50/30 bg-transparent px-3 py-2
                     text-sm focus:border-stone-400 focus:outline-none'
            rows="6"
          />
        </div>
        <button type='submit' className='mb-8 w-full rounded border border-stone-50/30
                bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300'>Send</button>
      </form>
      <span className="text-green-600">{result}</span>
    </div>
  )
}

export default Contact