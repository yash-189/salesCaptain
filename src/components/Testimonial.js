import React from 'react'
import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
import image4 from '../assets/image4.webp'

const testimonials = [
    {
        title: 'Get discovered by more customers',
        description:
          'Higher reviews & better listings make you more discoverable to people organically.',
        image: image1,
      },
      {
        title: 'Faster conversion with our Captain AI',
        description:
          'Automate web chat, messaging, reviews & feedbacks with our AI assistant.',
          image: image2,
      },
      {
        title: 'Marketing that works for you',
        description:
          'Run highly effective & targeted campaigns on text and emails and put your customer data to use.',
          image: image3,
      },
      {
        title: 'Training & Support',
        description:
          'Talk to a dedicated relationship manager to get the help you need. No wait time, a dedicated line just for you.',
          image: image4,
      },
  ];


const Box = ({ image, title, subtitle, styl, imageStyle }) => {
    return (

        <div className={`flex ${styl} items-center flex-wrap md:flex-nowrap mt-8 md:my-28 md:gap-28`}>
            <div className=' md:w-1/2  '>
        <img src={image} className={` max-h-96 rounded-lg max-w-md   md:h-full h-60 w-full  object-cover ${imageStyle} `} />
        </div>
            <div className='md:w-1/2 text-start '>


                <h3 className='md:text-3xl text-xl text-black  mt-8 md:mt-3 font-bold'>{title}</h3>
                <h3 className='md:text-xl text-lg  md:w-10/12  text-gray-600 mt-3 '>{subtitle}</h3>
                <button className='text-blue-500 font-medium text-lg mt-4'>Get Started</button>
            </div>
        </div>

    )
}



const Testimonial = () => {
    return (
        <section className='font-Comfortaa text-center mt-28 mb-10 container mx-auto'>
             <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-5xl text-xl font-bold  title-font mb-10 text-gray-900 relative after:w-24 after:bg-transparent after:absolute after:-bottom-6 after:left-1/2 after:-translate-x-1/2 after:border-b-4 after:border-b-blue-500">
          Make your business stand out with us
          </h1>

        </div>

            <div className='w-11/12 mx-auto mt-20 '>

{testimonials.map((testimonial, index)=>(
   <Box key={index} styl={index==1 || index==3 ?'flex-row-reverse':''} imageStyle={index==1 || index==3 ?'ml-auto':''} image={testimonial.image} title={testimonial.title} subtitle={testimonial.description}/>
))}
             

           


                </div>
          

        </section>
    )
}

export default Testimonial