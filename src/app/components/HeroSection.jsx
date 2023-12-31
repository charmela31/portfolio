"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const handleDownload = () => {
    // Replace 'path/to/resume.pdf' with the correct path to your PDF file
    const pdfPath = "/cv.pdf";

    // Create a link element
    const link = document.createElement("a");

    // Set the download attribute with the desired file name
    link.download = "cv.pdf";

    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };


const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600'>Hello, I'm {" "}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Charmela',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'a Programmer',
                                1000,
                                'a Web Developer',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Welcome to my digital playground, where pixels come to life and ideas transform into seamless web experiences. As a passionate web developer, I thrive on crafting elegant and functional solutions that elevate user interaction. With a keen eye for design and a mastery of cutting-edge technologies, I specialize in bringing visions to the web, creating dynamic and responsive websites that leave a lasting impression.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 via-primary-500 to-primary-500 hover:bg-slate-200 text-white'>Hire Me</button>
                        <button onClick={handleDownload} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 via-primary-500 to-primary-500 hover:bg-slate-800 text-white  mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                     className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src={'/images/hero-image.png'}
                            alt='hero image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300} />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection