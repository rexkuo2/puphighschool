import React from 'react';

interface HeaderProps {
  navLinks: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  return (
    <header>
      <div className="logo">Company Logo</div>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;