import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export const getSocialIcons = (iconName: string) => {
  switch (iconName) {
    case "FaGithub":
      return <FaGithub />;
    case "FaInstagramSquare":
      return <FaInstagramSquare />;
    case "FaLinkedin":
      return <FaLinkedin />;
    default:
      return null;
  }
};
