'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

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
          <h2 className="text-3xl font-bold text-white">Let's chat.</h2>
          <p className="mt-4 text-lg text-white-700">
            Tell me about your project. Let’s create something together.
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
        {/* Form Section */}
        <div className="flex-1 bg-[#27272c] p-3sss rounded-lg shadow-md">
          <form onSubmit={sendEmail} className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Send us a message 🚀</h3>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Tell us more about your project"
              value={formData.message}
              onChange={handleChange}
              required
              className="h-32"
            />
            <Button type="submit" className="bg-yellow-600 text-white mt-4">
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
            {isSuccess && <p className="text-green-500">Message sent successfully!</p>}
            {isError && <p className="text-red-500">Failed to send message.</p>}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
