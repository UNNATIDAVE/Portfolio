import React from 'react';
import chatImg from '../../../public/assets/projects/chatApp.png';
import apiImg from '../../../public/assets/projects/fb_detail_1.png';
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 text-center'>
        <p className='text-xl tracking-widest font-extrabold uppercase text-red-950'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Socket Chat App'
            backgroundImg={chatImg}
            projectUrl='/chatapp'
            tech='Angular JS'
          />
          <ProjectItem
            title='API integration'
            backgroundImg={apiImg}
            projectUrl='/apiintegration'
            tech='Angular JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
