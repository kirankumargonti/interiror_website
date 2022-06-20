import React from "react"
import { IoIosCall } from "react-icons/io"

const Contact = () => {
  return (
    <div className='contact_container'>
      <div className='contact_wrapper'>
        <h1>Let's discuss about your interior</h1>
        <p>
          Even the all-powerful pointing has no control about the blindtexts it
          is an almost unorthographic.
        </p>
        {/* <div className='contactBtn_wrapper'>
          <button className='contact_btn'>Contact Us</button>
          <button className='number_btn'>
            <div className='call'>
              <IoIosCall />
            </div>
            <p> +91 9701866010</p>
          </button>
        </div> */}
        <form>
          <div className='form_wrapper'>
            <input type='text' placeholder='John Doe' />
            <input type='email' placeholder='John@gmail.com' />
            <input type='tel' placeholder='7569984640' />

            <textarea
              name='message'
              id='message'
              placeholder='Tell me about your interior'
            ></textarea>
            <button className='contact_btn'> Send Now!</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
