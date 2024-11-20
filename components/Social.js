import Link from 'next/link';

import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

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
  {
    name: 'Facebook',
    url: '',
    icon: <FaFacebook />,
  },
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
