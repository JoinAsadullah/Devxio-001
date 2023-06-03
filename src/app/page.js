'use client';
import Image from 'next/image'
import {useState} from 'react'
import {motion, useCycle} from 'framer-motion'
import Section from '../components/portfolio-pg/Section.jsx';
import MenuToggle from '../components/portfolio-pg/menutoggle.jsx';




export const metadata = {
  title: 'Asadullah Portfolio',
  description: 'Muhammad Asadullah Full Stack Developer Portfolio',
  viewport: 'width=device-width, initial-scale=1.0',
};
export default function Home() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <main className="flex min-h-screen max-w-[1080px] mx-[auto] bg-gray-700 flex-col items-center justify-between p-24">
        <Section element='section'  className="md:bg-black md:px-10 lg:px-20 h-[65px]  z-10 absolute top-0 w-full" spanClassName="w-full flex justify-between h-full flex-wrap md:flex-nowrap">
          <div className='h-full aspect-[2/1] p-4 flex flex-row items-center cursor-pointer'>
            <img className=" w-full object-cover" src="/portfolio-pg/profile.png" />
          </div>
          <motion.div animate={isOpen ? "open" : "closed"} className={`md:hidden aspect-square w-max border-yellow-400 font-black h-full flex`}>
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div>
          <div className={`md:[position:unset] md:border-0 md:[display:unset] h-full absolute top-10 right-0 max-md:m-3 p-3 bg-[#000] md:[background:none] rounded-md  text-right border-[1px] border-[rgba(90,90,90,.9)] max-md:transition-all duration-700 ease-linear ${isOpen ? 'max-md:opacity-90 max-md:scale-100' : 'max-md:opacity-0 max-md:scale-0'}`  }>
            <ul className="flex flex-col md:flex-row h-full">
              <a className='flex items-center justify-around h-full'><li className="md:flex md:items-center text-sm leading-normal text-[#888] hover:text-white rounded-lg mx-[3px] font-light cursor-pointer h-[30px] px-4 max-sm:rounded-md max-sm:px-2">Home</li></a>
              <a className='flex items-center justify-around h-full'><li className="md:flex md:items-center text-sm leading-normal text-[#888] hover:text-white rounded-lg mx-[3px] font-light cursor-pointer h-[30px] px-4 max-sm:rounded-md max-sm:px-2">Services</li></a>
              <a className='flex items-center justify-around h-full'><li className="md:flex md:items-center text-sm leading-normal text-[#888] hover:text-white rounded-lg mx-[3px] font-light cursor-pointer h-[30px] px-4 max-sm:rounded-md max-sm:px-2">About</li></a>
              <a className='flex items-center justify-around h-full'><li className="md:flex md:items-center text-sm leading-normal text-[#888] hover:text-white rounded-lg mx-[3px] font-light cursor-pointer h-[30px] px-4 max-sm:rounded-md max-sm:px-2">Contact</li></a>
              <a className='max-md:hidden buttonreset md:flex md:items-center md:justify-around md:h-full' href='/yoga.pdf'><button type='button' className="text-md leading-normal text-gray-300 rounded-lg mx-[3px] font-sm font-semibold bg-black rounded-full  w-max h-[30px] px-3 border-[#333] hover:border-[#fafafa] border-[1px]">Download CV</button></a>
            </ul>
          </div>
        </Section>
        <div className="px-4 md:px-12 lg:px-24 w-full h-screen bg-cover max-md:min-h-[120vw] md:min-h-[50vw] bg-no-repeat bg-center pt-12 md:pt-20 md:flex flex-row h-full">
          <Section element="div" className="max-md:h-[27%] my-10 md:pb-10 md:basis-1/2 md:my-[auto] flex flex-col justify-center" spanClassName="flex flex-col justify-center" >
            <h1 className="md:text-[max(48px,min(5vw,76px))] mb-3 leading-none font-black">Hi I am <span className="text-[#aca6ff] ">Muhammad Asadullah</span></h1>
            <h1 className="mt-3 md:text-[max(48px,min(5vw,76px))] leading-none font-black">I am Full Stack Web Developer.</h1>
          </Section>
          <div className="//bg-[url('/portfolio/herobackground/profile.svg')] bg-contain bg-no-repeat bg-center max-md:h-[40%]  md:h-full md:basis-1/2 flex items-center relative" >
            <div className="md:w-full md:aspect-square max-md:w-screen max-md:h-full mx-[auto] ">
            </div>
          </div>
          <div className="text-center md:hidden " ><a href='/yoga.pdf'><button className="bg-[#030284] aspect-[7/2] px-2 rounded-full m-5 border-[1px] w-max border-sky-400 font-bold hover:bg-[rgb(37,99,235)]">DOWNLOAD CV</button></a></div>
        </div>
        <Section element="section"  className="px-4 md:px-12 lg:px-24 py-10">
          <h2 className='text-3xl font-black tracking-tight text-white sm:text-4xl'>Overview</h2>
          <p className='md:pl-4 pl-2 md:pr-[30vw] mt-3 text-gray-400 text-md'>
            I am a Full Stack Website Developer with 2 years of experience with the expertise in MERN web application development and deployment.
            Moreover as a full stack developer I have experience of Search engine optimization, Cloud Services, and Web Security.
          </p>
          <div className="flex flex-row md:items-center mt-10 flex-wrap justify-around">
            <div className='p-2 w-[30vw] md:w-[20vw] lg:w-[15vw] bg-[rgba(9,4,98,0.6)] max m-2 aspect-[5/6] rounded-[15px] border-[1px] border-gray-800'>
              <img src='/app-development.png' className='w-[80%] mx-[auto]' alt=''/>
              <h4 className='m-2 text-[12px] text-center text-gray-300 font-bold'>Web Developer</h4>
            </div>
            <div className='p-2 w-[30vw] md:w-[20vw] lg:w-[15vw] bg-[rgba(9,4,98,0.6)] max m-2 aspect-[5/6] rounded-[15px] border-[1px] border-gray-800'>
              <img src='/server.png' className='w-[80%] mx-[auto]' alt=''/>
              <h4 className='my-2 text-[12px] text-center text-gray-300 font-bold'>Backend Developer</h4>
            </div>
            <div className='p-2 w-[30vw] md:w-[20vw] lg:w-[15vw] bg-[rgba(9,4,98,0.6)] max m-2 aspect-[5/6] rounded-[15px] border-[1px] border-gray-800'>
              <img src='/development.png' className='w-[80%] mx-[auto]' alt=''/>
              <h4 className='m-2 text-[12px] text-center text-gray-300 font-bold'>SEO</h4>
            </div>
            <div className='p-2 w-[30vw] md:w-[20vw] lg:w-[15vw] bg-[rgba(9,4,98,0.6)] max m-2 aspect-[5/6] rounded-[15px] border-[1px] border-gray-800'>
              <img src='/shopping-online.png' className='w-[80%] mx-[auto]' alt=''/>
              <h4 className='m-2 text-[12px] text-center text-gray-300 font-bold'>Digital Marketer</h4>
            </div>
          </div>
        </Section>
        <Section element="section"  className="px-4 md:px-12 lg:px-24 py-10">
          <h2 className='text-3xl font-black tracking-tight text-white sm:text-4xl'>My projects</h2>
          <p className='md:pl-4 pl-2 md:pr-[30vw] mt-3 text-gray-400 text-md'>
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it.
          It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </p>
          <div className="flex flex-row md:items-center mt-10 flex-wrap justify-around">
            <div className='text-left flex flex-col p-3 m-10 w-[70vw] md:w-[30vw] lg:w-[20vw] bg-[rgba(9,4,50,0.6)] max m-2 aspect-[5/6] rounded-[15px] shadow-md'>
              <img src='/plch.jpg' className='w-full h-4/6 rounded-[10px] shadow-md' alt=''/>
              <h3 className='m-2 text-lg font-black text-gray-300'>Lorem Ipsum</h3>
              <p className='m-2 text-sm text-gray-600'>
              Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.
              </p>
              <h6 className='m-2 text-sm'>
                <span className='text-blue-300'> #react</span><span className='text-red-500'> #mongodb</span><span className='text-green-500'> #tailwind</span>
              </h6>
            </div>
            <div className='text-left flex flex-col p-3 m-10 w-[70vw] md:w-[30vw] lg:w-[20vw] bg-[rgba(9,4,50,0.6)] max m-2 aspect-[5/6] rounded-[15px] shadow-md'>
              <img src='/plch.jpg' className='w-full h-4/6 rounded-[10px] shadow-md' alt=''/>
              <h3 className='m-2 text-lg font-black text-gray-300'>Lorem Ipsum</h3>
              <p className='m-2 text-sm text-gray-600'>
              Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.
              </p>
              <h6 className='m-2 text-sm'>
                <span className='text-blue-300'> #react</span><span className='text-red-500'> #mongodb</span><span className='text-green-500'> #tailwind</span>
              </h6>
            </div>
            <div className='text-left flex flex-col p-3 m-10 w-[70vw] md:w-[30vw] lg:w-[20vw] bg-[rgba(0,0,50,0.6)] max m-2 aspect-[5/6] rounded-[15px] shadow-md'>
              <img src='/plch.jpg' className='w-full h-4/6 rounded-[10px] shadow-md' alt=''/>
              <h3 className='m-2 text-lg font-black text-gray-300'>Lorem Ipsum</h3>
              <p className='m-2 text-sm text-gray-600'>
              Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.
              </p>
              <h6 className='m-2 text-sm'>
                <span className='text-blue-300'> #react</span><span className='text-red-500'> #mongodb</span><span className='text-green-500'> #tailwind</span>
              </h6>
            </div>
          </div>
        </Section>
        <Section element="section"  className="px-4 md:px-12 lg:px-24 py-10">
        </Section>
      </main>
    </>
  )
}
