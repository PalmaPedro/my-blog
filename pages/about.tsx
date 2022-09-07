import type { NextPage } from 'next'
import Link from 'next/link';
import Image from 'next/future/image';

import Container from '../components/Container';
import Tag from '../components/Tags';

const  About:NextPage = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About me
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          As a backend developer, I can help you design, develop, and test applications, REST API's, and integrate external services into the application
          under development using NodeJS, Java (Spring) and PHP. As a frontend developer, I will be able to build responsive user interfaces with HTML, CSS, 
          JavaScript and commonly used frontend frameworks. I can help you materialize business requirements into software, working independently or together in a team, using Agile methodologies, delivering
          in short incremental cycles. 
        </p>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Skills and qualifications
        </h3>
        <ul className="list-none text-gray-600 dark:text-gray-400 mb-10">
          <li>✔️ Experience with front & backend development.</li>
          <li>✔️ Design, build and test API's.</li>
          <li>✔️ Database design</li>
        </ul>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Tech stack
        </h3>
        <div className="grid grid-cols-5 gap-2 text-gray-600 dark:text-gray-400 mb-10">
          <Tag
            title='Java'
          />
          <Tag
            title='JavaScript'
          />
          <Tag
            title='NodeJs'
          />
          <Tag
            title='Spring Boot'
          />
          <Tag
            title='Express'
          />
          <Tag
            title='HTML'
          />
          <Tag
            title='CSS, Tailwind'
          />
          <Tag
            title='React, Next'
          />
          <Tag
            title='MySQL'
          />
          <Tag
            title='MongoDb'
          />
         
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Work history
        </h3>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1">

          {/* Work experience #1 */}

          <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4">
            <div className="flex items-center justify-between">
              <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              01/2021 - Present
              </a>
            </div> 
            <div className="mt-2">
              <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                Software Developer | <a href="https://businessmate.io/" target="_blank">BUSINESSMATE</a>
              </a> 
              <p className="mt-4 mb-4 text-gray-600 dark:text-gray-300">
                I was part of the development team, contributing in multiple tasks througout the Sprints. Some of my tasks were helping building and
                testing modules to be integrated in the core application. These modules would handle interactions between third party services like Twilio, and
                Slack, for example. We used NodeJS with JavaScript and TypeScript, MariaDB and testing libraries like Jest. Tools like Postman, Docker and
                Git were also used during development.
              </p>
              <ul className="list-disc ml-8 mb-4 text-gray-600 dark:text-gray-300">
                <li>Experience with front & backend development.</li>
                <li>Design, build and test API's.</li>
                <li>Database design</li>
              </ul>
            </div> 
          </div>

           {/* Work experience #2 */}
      
          <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mb-4">
            <div className="flex items-center justify-between">
              <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
              08/2020 - 11/2020
              </a>
            </div> 
            <div className="mt-2">
              <a href="#" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">
                Internship | <a href="https://seasony.io/" target="_blank">SEASONY</a>
              </a> 
              <p className="mt-4 mb-4 text-gray-600 dark:text-gray-300">
                I did an internship at Seasony during my AP Degree in Computer Science, working together in the development team. Some of my task were to build a fullstack application that could display in the browser, data being gathered
                by a device, that was currently in development at the company. I used NodeJS, MongoDB and React
              </p>
              <ul className="list-disc ml-8 mb-4 text-gray-600 dark:text-gray-300">
                <li>Built an UI to allow data visualization and management</li>
                <li>Built a backend application that could process all data coming from a device and send it to the frontend for visualization</li>
                <li>Design a database that could persist all incoming data from the device</li>
              </ul>
            </div> 
          </div>

        </div>
      </div>
    </Container>
  );
}

export default About
