import React, { useId } from "react"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"

const Footer = () => {
  const socialArray = [
    {
      id: useId(),
      icon: <FaFacebookF />,
      link: "",
    },
    {
      id: useId(),
      icon: <AiOutlineTwitter />,
      link: "",
    },
    {
      id: useId(),
      icon: <BsInstagram />,
      link: "",
    },
    {
      id: useId(),
      icon: <FaLinkedinIn />,
      link: "",
    },
  ]

  return (
    <footer>
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_top'>
            {socialArray?.map((network) => (
              <a
                href={network?.link}
                className='icon'
                target='_blank'
                key={network?.id}
              >
                {network?.icon}
              </a>
            ))}
          </div>
          <div className='footer_bottom'>
            @copyright {new Date().getFullYear()} BN INTERIOR - All Rights
            Received
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
