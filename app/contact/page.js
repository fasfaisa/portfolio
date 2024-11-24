'use client';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    text: '+94 773 182 945',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    text: 'fathimafaisa00@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    text: 'Vavuniya, Sri Lanka',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-10 bg-[#27272c] text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <div className="flex-1 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-white">Let us chat.</h2>
            <p className="mt-4 text-lg text-white-700">
              Tell me about your project. Let us create something together.
            </p>

            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-14 h-14 xl:w-20 xl:h-20 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.text}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* GIF Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/assets/cont.webp" // Replace with the actual path where you save the GIF
            alt="Communication illustration"
            className="max-w-50 h-50"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
