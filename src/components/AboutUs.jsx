import React from 'react'
import '../index.css'
import About from "../assets/about.png"

export const AboutUs = () => {
  return (
    <section className="my-20 lg:my-20 gray-gradient lg:px-64 flex justify-between text-center lg:text-left py-32 px-10">
      <img src={About} className="hidden lg:block"></img>
      <div className="w-full lg:w-[48%] flex flex-col justify-center items-center gap-10 lg:gap-6">
        <h2 className="font-poppins font-medium text-4xl lg:pr-72 ">About Us</h2>
        <p className="text-sm lg:text-base px-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
        <div className='lg:pr-72'>
          <button className="rounded-3xl w-32 lg:w-40 h-10 lg:h-12 bg-pinkish text-white font-bold z-50 text-sm lg:text-base">Read More</button>
        </div>
      </div>
    </section>
  )
}
