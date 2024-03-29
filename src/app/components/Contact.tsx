import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
// import contactImg from '../../../public/assets/contactme.png';
import contactImg from '../../../public/assets/Contact_Me.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full text-center'>
      <div className='m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest font-extrabold uppercase text-red-950'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div >
          <div>
            <h2 className='py-2'>Unnati Dave</h2>
            <p>Front-End Developer</p>
            <p className='py-4'>
              I am open for remote work. Contact
              me and let&apos;s talk.
            </p>
          </div>
          <div>
            <div className='flex items-center justify-center py-4'>
            
                <span className='pr-2 pb-4'>
                <Image
                    src={contactImg}
                    width='100'
                    height='100'
                    alt="contact us"
                  />
                </span>
              <a className='pr-2'
                href='https://www.linkedin.com/in/unnati-dave-69b74787'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a className='pr-2'
                href='https://github.com/UNNATIDAVE'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <a className='pr-2' href="mailTo:unnatidave11@gmail.com">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
              </a>
              <Link href='/resume' >

                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>

              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-red-950'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
