'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJava,
  FaPython,
  FaAws
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiSpringboot,
  SiC,
  SiCsharp,
  SiDotnet
} from 'react-icons/si';

const about = {
  title: 'About Me',
  description:
    'I am a full-stack developer with expertise in building feature-rich applications, particularly using the MERN stack (MongoDB, Express, React, Node.js) and Django. My experience includes developing secure and responsive web applications with a focus on intuitive UI/UX, utilizing technologies like Next.js and Tailwind CSS for optimized performance. I am dedicated to delivering innovative, efficient solutions that meet the needs of both users and stakeholders.',
  info: [
    { fieldName: 'Name', fieldValue: 'Fathimafaisa Thaufeek' },
    { fieldName: 'Phone', fieldValue: '(+94) 773182945' },
    // { fieldName: 'Experience', fieldValue: '2+ Years' },
    { fieldName: 'Nationality', fieldValue: 'Sri Lankan' },
    { fieldName: 'Email', fieldValue: 'fathimafaisa00@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'Tamil, English' },
  ],
};

const education = {
  icon: FaHtml5,
  title: 'My Education',
  description:
    'currently pursuing a degree in Computer Science and Technology. Experienced in developing web applications with proven skills in managing group projects. Eager to apply my knowledge and skills in a hands-on internship opportunity to further enhance my expertise.',
  schools: [
    {
      institution: 'Uva Wellasa University of SriLanka',
      degree: 'BSc (Hons) in Computer Science & Technology',
      duration: 'july 2021 - Aug 2025',
    },
    {
      institution: 'V/Vavuniya Rambaikulam G.M.V',
      degree: 'Advanced Level',
      duration: 'Jan 2016 - Aug 2018',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description:
    'I have experience working with a variety of technologies and tools. Here are some of the key skills that I bring to the table:',
  skillList: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'React Native', icon: <FaReact /> },
    { name: 'Figma', icon: <FaFigma /> },
    {name: 'AWS', icon: <FaAws/>}
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.schools.map((school, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-55 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{school.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {school.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] inline-block rounded-full bg-accent"></span>
                            <p className="text-white/60">
                              {school.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-8 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-40 bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
