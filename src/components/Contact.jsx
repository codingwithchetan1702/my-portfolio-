import React from 'react'

function Contact() {
  return (
    <div className='p-4'>
        <h2 className='my-12 text-center text-4xl font-semibold
        tracking-tighter'>Let's Connect</h2>

        <form>
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
    </div>
  )
}

export default Contact