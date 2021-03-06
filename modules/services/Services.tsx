import React, {useId} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {GiPartyFlags} from 'react-icons/gi'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'

//images
import blobOne from '../../public/svg/blobOne.svg'
import blobTwo from '../../public/svg/blobTwo.svg'
import blobThree from '../../public/svg/blobThree.svg'
import Image from 'next/image'

const Services = () => {
  const servicesArray = [
    {
      id: useId(),
      icon: <AiOutlineHome />,
      icon_bg: blobOne,
      text: 'Home Interior',
      imageSrc:
        'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description:
        'You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.',
    },
    {
      id: useId(),
      icon: <HiOutlineOfficeBuilding />,
      icon_bg: blobTwo,
      text: 'Office Interior',
      imageSrc:
        'https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description:
        'You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.',
    },
    {
      id: useId(),
      icon: <GiPartyFlags />,
      icon_bg: blobThree,
      text: 'Party Interior',
      imageSrc:
        'https://images.pexels.com/photos/4997875/pexels-photo-4997875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description:
        'You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.',
    },
  ]
  return (
    <section className='services'>
      <div className='container'>
        <div className='services_heading'>
          <h1>What We Do?</h1>
          <p>
            We're an office interior design firm dedicated to designing the
            perfect office environment for your team.
          </p>
        </div>
        {/* <div className='services_wrapper'>
          {servicesArray?.map((service) => (
            <div className='service_card' key={service?.id}>
              <div className='service_icon'>
                <Image src={service?.icon_bg} layout='fill' />
                {service?.icon}
              </div>
              <div className='service_content'>
                <h3>{service?.text}</h3>
                <p>{service?.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        {servicesArray?.map((service) => (
          <div className='service_section' key={service?.id}>
            <div className='service_section_left'>
              <h3>{service?.text}</h3>
              <p>{service?.description}</p>
            </div>
            <div className='service_section_right'>
              <Image objectFit='cover' src={service?.imageSrc} alt='image' layout='fill' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
