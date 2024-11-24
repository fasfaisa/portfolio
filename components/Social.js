import Link from 'next/link';

import { FaFacebook, FaGithub, FaLinkedin, FaVoicemail, FaYoutube, FaEnvelope } from 'react-icons/fa';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/fasfaisa',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/fathimafaisa/',
    icon: <FaLinkedin />,
  },
  // {
  //   name: 'Email',
  //   url: 'fathimafaisa00@gmail.com',
  //   icon: <FaEnvelope />,
  // },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.url} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
