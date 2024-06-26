import React from 'react';
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaTwitter, FaYoutube, FaCommentDots } from 'react-icons/fa';


const sizeClasses = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

const SocialMediaIcon = ({
  icon: Icon,
  link,
  size = "medium",
  textColor = "text-blue-1000",
  hoverBgColor = "hover:bg-gray-200",
  onClick,
}) => (
  <div className={`p-3 ${hoverBgColor} rounded-lg`}>
    <a
      href={link}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sizeClasses[size]} ${textColor}  flex items-center duration-300`}
    >
      {Icon && <Icon className="text-xl" />}
    </a>
  </div>
);

const socialMediaLinks = [
  { icon: FaInstagram, link: 'https://www.instagram.com' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com' },
  { icon: FaTelegramPlane, link: 'https://telegram.org' },
  { icon: FaTwitter, link: 'https://www.twitter.com' },
  { icon: FaYoutube, link: 'https://www.youtube.com' },
  { icon: FaCommentDots, link: 'https://www.threads.net' },  
];

const SocialMediaIcons = () => (
  <div className="flex justify-center items-center gap-3 pt-9 py-4">
    {socialMediaLinks.map(({ icon, link }, index) => (
      <SocialMediaIcon key={index} icon={icon} link={link} />
    ))}
  </div>
);
            
export default SocialMediaIcons;
