"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Profile from "@/components/Profile";
import Stats from "@/components/Stats";

const Home = () => {
  const [currentRole, setCurrentRole] = useState("");
  const roles = ["Full Stack Developer", "Software Engineer", "MERN Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 100;
    const role = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < role.length) {
        setCharIndex((prev) => prev + 1); // Add a character
        setCurrentRole(role.slice(0, charIndex + 1));
      } else if (deleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1); // Remove a character
        setCurrentRole(role.slice(0, charIndex - 1));
      } else if (!deleting && charIndex === role.length) {
        setDeleting(true); // Start deleting after typing the whole role
      } else if (deleting && charIndex === 0) {
        setDeleting(false); // Stop deleting and move to the next role
        setRoleIndex((prev) => (prev + 1) % roles.length); // Move to the next role
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* Dynamic Running Text */}
            <span className="text-xl">{currentRole}</span>
            <h1 className="h1 mb-6">
              {`Hello, I'm`}
              <br />
              <span className="text-accent">Faisa</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a passionate software engineer from Sri Lanka. I specialize in crafting
              innovative and impactful digital solutions, with expertise in diverse programming
              languages, frameworks, and cutting-edge technologies.
            </p>

            <div className="flex flex-col gap-8 xl:flex-row items-center">
              <a href="/assets/Faisa.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="uppercase flex items-center gap-2"
                >
                  <FiDownload className="text-xl" />
                  Download CV
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duratio-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Profile />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
