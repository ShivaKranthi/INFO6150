import React, { useRef, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Image } from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            Line.current.classList.add('lineon')
            text.current.classList.add('titleon');
        }, 5)


        return () => {

        }
    }, [])
    return (



        <>
            <Helmet>
                <title>About</title>
            </Helmet>


            <div className='headingA'>
                <div className='line' ref={Line}>
                </div>
                <h1 className='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className='text'>
                    <h1>
                        Why Us
                    </h1>
                    <p>
                        Our electronic repair store and refurbished seller offers a wide range of services to our customers. With experienced technicians who are experts in repairing electronic devices, we can fix your smartphone, laptop, tablet, and more. We use only genuine parts in our repairs to ensure that your device works like new again. Our repair services come with a warranty, giving you peace of mind knowing that you can trust us to fix your device properly. With our head quarters at Northeastern University Boston Massachusetts. We have our braches across globe with cloud repair centers.
                        <br /><br />
                        If you're looking to save money without sacrificing quality, we also offer a selection of refurbished electronics. Our team thoroughly tests and restores all of our refurbished devices, so you can be sure that they work like new before you buy them. We offer a wide range of refurbished devices, including smartphones, laptops, tablets, and more.
                    </p>
                </div>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='350px' objectFit="cover" src='https://i.imgur.com/jxCHIuG.jpg' alt="About Us Image" />
                    </div>
                </div>
            </div>



            <div className='Content2'>
                <div className='text'>
                <h1>
                        Customer Centric
                    </h1>
                    <p>
                        Being customer-centric is at the core of everything we do at our electronic repair store and refurbished seller. We understand that our customers are the lifeblood of our business, which is why we prioritize their needs above all else. From the moment you walk through our doors, you can expect to be treated with the utmost respect and care. Our friendly staff is always on hand to answer any questions you may have and to guide you through the repair or purchasing process.
                        <br /><br />
                        We believe that building long-term relationships with our customers is key to our success. We strive to provide a personalized experience for each and every customer, taking the time to understand their unique needs and preferences. Whether you're in need of a repair or are looking to buy a refurbished device, we will work closely with you to ensure that you are completely satisfied with your experience. At our electronic repair store and refurbished seller, you can expect to receive top-notch customer service every step of the way.
                    </p>
                </div>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='350px' objectFit="cover" src='https://i.imgur.com/gt2K5W4.jpg' alt="About Us Image" />
                    </div>
                </div>
            </div>

        </>

    )
}

export default About
