'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

    const services = [
        {
          num: '01',
          title: 'Full-Stack Web Development',
          href: '/services/full-stack-web-development',
          description:
          'Building robust, scalable applications using the MERN stack.I focus on creating high-performance solutions from backend architecture to frontend interactivity, delivering comprehensive end-to-end services.',
        },
        {
          num: '02',
          title: 'Mobile Development',
          href: '/services/mobile-development',
          description:
            'Developing cross-platform mobile applications using framework like React Native. Skilled in integrating complex backend services with intuitive mobile interfaces to create a cohesive user experience on both Android and iOS.',
        },
        {
          num: '03',
          title: 'UI/UX Design',
          href: '/services/ui-ux-design',
          description:
            'Designing impactful and user-centric interfaces with Figma and Adobe XD. I emphasize intuitive navigation and responsive layouts, ensuring each design is optimized for usability and brand consistency across web and mobile applications.',
        },
      ];
      

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.5, ease: 'easeInOut' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center p-8 transition-transform transform hover:scale-105 duration-300"
            >
              {/* Arc and Gradient Number */}
              <div className="absolute -top-8 w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center text-4xl font-bold text-white transform -rotate-45 shadow-md">
                {service.num}
              </div>

              {/* Title with Gradient Text */}
              <h2 className="mt-12 text-3xl font-semibold bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
                {service.title}
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 mt-4 mb-6 max-w-xs">
                {service.description}
              </p>

              {/* Custom Button Style */}
              <Link href={service.href} passHref>
                <motion.div
                  className="px-6 py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-teal-400 transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More
                </motion.div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;