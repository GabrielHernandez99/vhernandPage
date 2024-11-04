import React from "react";

interface CommonNavbarProps {
  navContent: {
    name: string;
    link: string;
    active: boolean;
  }[];
}
const CommonNavbar: React.FC<CommonNavbarProps> = ({ navContent }) => {
  return (
    <nav className="w-full">
      <div className="flex items-stretch justify-between px-40">
        {navContent.map((navItem, index) => (
          <a
            key={index}
            className={`nav-item nav-link ${navItem.active ? "active" : ""}`}
            href={navItem.link}
          >
            {navItem.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default CommonNavbar;
