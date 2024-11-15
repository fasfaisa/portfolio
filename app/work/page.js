'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsGithub, BsPlayCircle, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Henna Ventures',
    category: 'FullStack',
    description: 'Henna Ventures was developed using the MERN stack to blend traditional mehendi artistry with modern technology. This platform includes a unique 3D model hand for virtual henna design customization, a marketplace for high-quality henna products, and options for customizable gift packages. Additional features such as appointment scheduling and artist verification create a seamless experience for users and empower artists.',
    stack: ['React', 'Tailwind CSS','MongoDB', 'Express', 'Node.js'],
    image: '/assets/work/henna.jpg',
    live: '',
    github: 'https://github.com/fasfaisa/henna_ventures',
  },
  {
    title: 'BiteBlaze',
    category: 'Full Stack',
    description:
      'BiteBlaze is designed to streamline the food ordering experience. The secure sign-in system ensures that user data is protected. The platform supports CRUD operations, allowing both customers and restaurateurs to manage menus, orders, and payments efficiently. The intuitive dashboard provides valuable insights into order data through interactive tables. Built with a tech stack of React.js for a responsive front-end and Python with Django for a scalable back-end, BiteBlaze provides a smooth and dynamic user experience.',
    stack: ['Tailwind CSS','React','Django'],
    image: '/assets/work/biteblaze.jpeg',
    live: '',
    github: 'https://github.com/fasfaisa/Biteblaze',
  },
  {
    title: 'Aurora',
    category: 'Fullstack',
    description: 'Aurora is an interactive e-commerce platform designed to provide a seamless shopping experience. It offers user-friendly features like secure login, easy registration, and a detailed product catalog that allows users to view items by attributes such as color and size. The website includes a unique customization service where users can collaborate with designers to create personalized products. Aurora also provides a streamlined shopping cart, checkout system, and customized product purchase options, ensuring a smooth and enjoyable online shopping experience.',
    stack: [
      { name: 'Html' },
      { name: 'CSS' },
      { name: 'Javascript' },
      { name: 'Bootstrap' },
      { name: 'PHP' },
    ],
    image: '/assets/work/Aurora.png',
    live: '',
    github: 'https://github.com/fasfaisa/Aurora_Project1',
  },
  {
    title: 'Elezione',
    category: 'Full Stack',
    description:
      'Elezione is a web-based platform designed for secure and efficient online voting, perfect for events like reality shows. It offers two account types: free voter accounts and campaign organizer accounts with three tiered levels—Silver, Gold, and Platinum—each providing different features and customization options. With real-time voting data, customizable campaign rules, and a news feed, Elezione ensures a seamless voting experience. Built with HTML, CSS, JavaScript, and PHP, it’s optimized for scalability and security, making it an ideal choice for large-scale voting campaigns.',
    stack: ['Tailwind CSS','PHP','Html','Javascript'],
    image: '/assets/work/Elezione.png',
    live: '',
    github: 'https://github.com/fasfaisa/Elezione-1',
  },
  {
    title: 'Todo',
    category: 'Fullstack',
    description: ' ToDo website is a task management application designed to help users organize and prioritize their tasks effortlessly. It includes features like user profile customization, task creation with detailed descriptions, scheduling for single or recurring tasks, and easy categorization. Users can set task priorities, receive reminders, mark tasks as complete, and delete them when done. With an intuitive interface and essential productivity tools, this platform simplifies task management, making it ideal for staying organized and focused on high-priority activities..',
    stack: [
      { name: 'Html' },
      { name: 'CSS' },
      { name: 'Javascript' },
      { name: 'JSP' },
    ],
    image: '/assets/work/Todo.png',
    live: '',
    github: 'https://github.com/fasfaisa/todo',
  },
  // Additional projects...
];

const Work = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProjectIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.5 } }}
      className="min-h-screen flex flex-col justify-center items-center py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center xl:flex-row xl:justify-between gap-8">
          <div className="w-full xl:w-1/2 text-center xl:text-left mb-8 xl:mb-0">
            <h2 className="text-3xl font-semibold mt-4">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <ul className="flex flex-wrap gap-2 mt-4">
  {project.stack.map((tech, index) => (
    <li key={index} className="text-accent text-sm">
      {tech.name || tech} {/* Check if tech is an object with a "name" property */}
      {index < project.stack.length - 1 && ', '}
    </li>
  ))}
</ul>

            <div className="mt-6 flex gap-4 justify-center xl:justify-start">
              <Link href={project.live} className="btn-primary">
                <BsPlayCircle className="mr-2" /> Live Demo
              </Link>
              <Link href={project.github} className="btn-secondary">
                <BsGithub className="mr-2" /> GitHub
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-1/2 relative">
            <div className="flex items-center justify-between absolute inset-y-1/2 w-full px-4 z-10">
              <button onClick={handlePreviousProject} className="btn-nav">
                <BsChevronLeft />
              </button>
              <button onClick={handleNextProject} className="btn-nav">
                <BsChevronRight />
              </button>
            </div>
            <div className="relative group rounded-lg overflow-hidden shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                layout="responsive"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: background 0.3s ease;
        }
        .btn-primary {
          background-color: #4f46e5;
          color: white;
        }
        .btn-primary:hover {
          background-color: #4338ca;
        }
        .btn-secondary {
          background-color: #1f2937;
          color: white;
        }
        .btn-secondary:hover {
          background-color: #111827;
        }
        .btn-nav {
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          padding: 0.75rem;
          font-size: 1.5rem;
          color: #4f46e5;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .btn-nav:hover {
          background: rgba(255, 255, 255, 0.9);
          color: #4338ca;
        }
      `}</style>
    </motion.section>
  );
};

export default Work;
