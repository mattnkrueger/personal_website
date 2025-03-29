import React from 'react'
import { 
  GitHubIcon, 
  HomeIconEmpty, 
  HomeIconFilled, 
  PhoneIconEmpty, 
  PhoneIconFilled,
  MoonIconEmpty,
  MoonIconFilled,
  DinosaurIconEmpty,
  DinosaurIconFilled,
  LinkedInIcon
} from '../assets/svg/svgIcons'

/**
 * IconLink component that wraps an icon in a hyperlink
 * @param {string} iconName - The name of the icon to display
 * @param {Array} navItem - Navigation item in format ["name", "path"]
 * @param {string} className - CSS class for styling the icon
 * @param {function} onClick - Click handler function
 * @param {object} iconProps - Props to pass to the icon (width, height)
 * @returns {JSX.Element} The icon wrapped in a link
 */
const IconLink = ({ iconName, navItem, className = '', onClick, ...iconProps }) => {
  // Extract the path from the navigation item
  const path = navItem[1];
  
  // Map icon names to their components
  const iconComponents = {
    'github': GitHubIcon,
    'homeEmpty': HomeIconEmpty,
    'homeFilled': HomeIconFilled,
    'phoneEmpty': PhoneIconEmpty,
    'phoneFilled': PhoneIconFilled,
    'moonEmpty': MoonIconEmpty,
    'moonFilled': MoonIconFilled,
    'dinosaurEmpty': DinosaurIconEmpty,
    'dinosaurFilled': DinosaurIconFilled,
    'linkedIn': LinkedInIcon
  };
  
  // Get the requested icon component
  const IconComponent = iconComponents[iconName];
  
  // If icon not found, return null or a fallback
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found`);
    return null;
  }
  
  // Only use target="_blank" for external links (GitHub and LinkedIn)
  const isExternalLink = ['github', 'linkedIn'].includes(iconName);
  
  return (
    <a 
      href={path} 
      {...(isExternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={onClick}
    >
      <IconComponent {...iconProps} className={className} />
    </a>
  );
};

export default IconLink;