import React from 'react';
const skills = ['Angular', 'React', 'SCSS', 'Tailwind Css', 'Redux', 'Next.js', 'Node.js', 'TypeScript', 'Angular Material',
  'Angular Forms', 'Agile', 'Dev-ops', 'HTML / HTML5', 'CSS / CSS3', 'Bootstrap/ Bootstrap5',
  'Ngrx', 'Rxjs', 'SASS/LESS', 'RESTful Web Services', 'Mongodb', 'SQL', 'Git', 'Unit Tests',
  'SEO', 'SEM'
]
const resume = () => {
  return (
    <div className='w-full p-5 text-center'>
      <p className='text-xl font-extrabold uppercase text-red-950' > UNNATI DAVE </p>
      <p>Surrey, BC-V3R0Z8 | +1-(778)862-9135 | unnatidave11@gmail.com <br />
        https://www.linkedin.com/in/unnati-dave-69b74787 | https://github.com/UNNATIDAVE</p>
      <div className='py-4 '>
        <p className='text-xl font-extrabold uppercase text-red-950'>OBJECTIVE </p>
        <p >Self-motivated team player with 7 years of hands-on experience with the Angular framework, 
          Node.js, React/ Redux, Mongodb, Rxjs, RESTful Web Services, and expertise in API integration. 
          Seeking a position as a lead web developer with Next Generation Web Development where I can 
          apply my advanced knowledge of web design with my leadership abilities to meet client needs 
          and exceed their expectations.</p>
      </div>

      <p className='text-xl font-extrabold uppercase text-red-950'>SKILLS & ABILITIES</p>

      <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 py-4'>
        {skills.map((item, index) => {
          return (
            <div className='p-2 shadow-xl rounded-xl'>
              <div className='grid grid-cols-2 gap-4 justify-left items-left'>
                <div className='flex flex-col items-left justify-left'>
                  <h3>{item}</h3>
                </div>
              </div>
            </div>)
        })}
      </div>

      <p className='text-xl font-extrabold uppercase text-red-950'>EXPERIENCE</p>
      <div>
        <div className='py-4'>
          <p className='text-lg font-bold'>IT Analyst</p>
          <p>Tata Consultancy Services | Kolkata, India	Nov 2021 – Nov 2023</p>
          <div className='text-left pl-20'>
              <li>Lead team of 15 member and guiding them to write code as per coding standards.</li>
              <li>Interacting with clients to understand the requirement and giving demo to them for completed functionalities.</li>
              <li>Developed new functionalities like chat - boxes, navigation bars and column - grid view for existing application using Angular, HTML, CSS, Angular Material.</li>
              <li>Created Web components for navigation bars, Header, footer and cards to reduce code redundancy and rework using Angular web component.</li>
              <li>End-to-end unit testing performed for project.</li>
          </div>
        </div>
        <div className='py-4'>
          <p className='text-lg font-bold'>Programmer Analyst</p>
          <p> Cognizant | Kolkata, India 	Jun 2019 – Oct 2021</p>
          <div className='text-left pl-20'>
              <li>Developed functionalities like cards using flexbox.</li>
              <li>User login, Password validation and user registration functionalities using React and Angular.</li>
              <li>Performed development, Unit testing and deployed code in production using Git and Devops.</li>
              <li>Fixed pre-built functionality issues like data mapping issues, UI issue, Old Functionality change required from client, etc.</li>
          </div>
        </div>
        <div className='py-4'>
          <p className='text-lg font-bold'>Full stack Developer</p>
          <p>Ingenuity Insights | Chennai, India 	Jul 2018 – May 2019</p>
          <div className='text-left pl-20'>
              <li>Created new application for the diabetic patients to maintain that sugar level and doctor’s appointments and diet.</li>
              <li>My job was to be extensively involved in design discussion and user experience session to provide inputs on the layout.</li>
              <li>Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML, CSS, Angular 7 and Bootstrap.</li>
              <li>Developed server-side script to store, validate, update and retrieve data from database using Node.js, MongoDB, Express.js and Passport.js.</li>
              <li>Hosted web application on Amazon EC2 cloud service using Git.</li>
          </div>
        </div>
        <div className='py-4'>
          <p className='text-lg font-bold'>MEAN Stack Developer Trainee</p>
          <p>edWiser | Chennai, India 	Nov 2017 – Jun 2018</p>
          <div className='text-left pl-20'>
              <li>Developed 10 new applications using Angular, Node.js, MongoDB for different APIs to fetching, updating, deleting and inserting data from Database. </li>
              <li>Hosted 3 applications on Amazon EC2 cloud using Nginx.</li>
              <li>Learn Basics of React, Java and SQL</li>
          </div>
        </div>
        <div className='py-4'>
          <p className='text-lg font-bold'>Analyst</p>
          <p>BlackRock | Mumbai, India 	Apr 2017 – Sep 2017</p>
          <div className='text-left pl-20'>
              <li>Revamped company’s old website to new responsive website using React, HTML and CSS. Added new functionalities like carousel and forms.</li>
              <li>Did end-to-end unit testing and deployed revamped website on cloud using git and Deveops.</li>
              <li>Handling all the tasks using JIRA.</li>
            </div>
        </div>
        <div className='py-4'>
          <p className='text-lg font-bold'>Executive</p>
          <p>Wera Food Technology Pvt Ltd | Mumbai, India 	Jul 2016 – Nov 2016</p>
          <div className='text-left pl-20'>
              <li>Developed attractive user interfaces for many restaurants as per the design specs and requirements of clients using Angular, React, HTML, CSS, Bootstrap.</li>
              <li>Took care of SEO (Search Engine Optimization) related contents for Company & Client’s Websites.</li>
            </div>
        </div>
        <div className='py-4'>
          <p className='text-lg font-bold'>Consultant</p>
          <p>Offergrid Networks Pvt Ltd | Bangalore, India 	Nov 2014 – Jan 2016</p>
          <div className='text-left pl-20'>
              <li>Developed company’s SPA (Single Page Application) as per requirements using Angular, HTML, CSS, Bootstrap.</li>
              <li>Created web forms using Angular and Node.js. With the help of this form user can inquire about company’s services.</li>
              <li>Integrated payment option to company’s website.</li>
            </div>
        </div>
      </div>
      <p className='text-xl font-extrabold uppercase text-red-950 pt-4'>EDUCATION</p>
      <p>Bachelor of Engineer
        <br />Gujarat Technological University, Gujarat, India-Jun 2013<br />
        Completed Bachelor of Engineering course in Computer Science with 6.85 CGPA.
      </p>
    </div>
  );
};

export default resume;