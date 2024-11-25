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
  FaAws,
  FaPhp,
  FaGit,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiSpringboot,
  SiC,
  SiCsharp,
  SiDotnet,
  SiMongodb,
  SiBootstrap,
  SiPostman,
  SiDjango,
  SiKotlin,
} from 'react-icons/si';


const about = {
  title: 'About Me',
  description:
    'I am a full-stack developer with expertise in building feature-rich applications, particularly using the MERN stack (MongoDB, Express, React, Node.js) and Django. My experience includes developing secure and responsive web applications with a focus on intuitive UI/UX, utilizing technologies like Next.js and Tailwind CSS for optimized performance. I am dedicated to delivering innovative, efficient solutions that meet the needs of both users and stakeholders.',
  info: [
    { fieldName: 'Name', fieldValue: 'Fathimafaisa Thaufeek' },
    { fieldName: 'Phone', fieldValue: '(+94) 773182945' },
    { fieldName: 'Nationality', fieldValue: 'Sri Lankan' },
    { fieldName: 'Email', fieldValue: 'fathimafaisa00@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'Tamil, English' },
  ],
};

const education = {
  title: 'My Education',
  description:
    'Currently pursuing a degree in Computer Science and Technology. Experienced in developing web applications with proven skills in managing group projects. Eager to apply my knowledge and skills in a hands-on internship opportunity to further enhance my expertise.',
  schools: [
    {
      institution: 'Uva Wellasa University of SriLanka',
      degree: 'BSc (Hons) in Computer Science & Technology',
      duration: 'July 2021 - Aug 2025',
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
  skillList: {
    frontend: [
      { name: 'HTML', icon: <FaHtml5 className="text-[#e34c26]" /> },
      { name: 'CSS', icon: <FaCss3 className="text-[#2965f1]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e]" /> },
      { name: 'React JS', icon: <FaReact className="text-[#61dafb]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952b3]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6db33f]" /> },
      { name: 'MERN Stack', icon: <SiMongodb className="text-[#47A248]" />, isText: true },
      { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" /> },
    ],
    tools: [
      { name: 'Git', icon: <FaGit className="text-[#F05032]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
    ],
    programmingLanguages: [
      { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
      { name: 'Python', icon: <FaPython className="text-[#306998]" /> },
      { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
      { name: 'Kotlin', icon: <SiKotlin className="text-[#0095D5]" /> },
    ],
  },
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
          defaultValue="education"
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
                    {education.schools.map((school, index) => (
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
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                {Object.entries(skills.skillList).map(([category, skillSet]) => (
                  <div key={category} className="mt-8">
                    <h4 className="text-2xl font-semibold capitalize">
                      {category}
                    </h4>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8 mt-4">
                      {skillSet.map((skill, index) => (
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
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
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
