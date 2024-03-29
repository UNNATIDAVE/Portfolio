import Link from 'next/link';
import React from 'react';

const Main = () => {
  return (
    <div id='home' className='w-full text-center'>
      <div className='max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center '>
        <div>
          <h1 className='text-2xl pt-10 font-extrabold text-red-950'>
            Hey there, I&#39;m Unnati
          </h1>
          <h1 className='text-gray-700'>A Full Stack Developer</h1>
          <div className=' text-gray-600 w-9/12 sm:max-w-[100%] m-auto'>
            <p className='py-2 '>
              I’m self-motivated quick learner with 7 years of hands-on experience as a Full-Stack Developer.
              Focused on building responsive Full Stack applications integrating back-end technologies.
              <br /><br />
              I specialize in building responsive front-end UI applications
              that connect with API’s and other backend technologies. I’m
              passionate about learning new technologies and understand there is
              more than one way to accomplish a task. Though I am most proficient
              in building front-end applications using Angular, React.js, Next.js, Node.js,
              HTML and CSS. I am a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one
              specific language, but choosing the best tool for the job.
              <br /><br />
              I started web developement in 2014 and working in many companies like TCS and Cognizant as a Web Developer.
              I have experience working directly with clients and taking mock wireframes all the way to deployed applications.<br />
              <br />I'm open for new opportunities!
            </p>
            <Link href='/#projects' className='underline text-blue-800 hover:text-blue-600 visited:text-purple-600'>
              Check out some of my latest projects.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
