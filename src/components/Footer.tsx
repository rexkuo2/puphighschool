import React from 'react';

interface FooterProps {
    copyright: string;
    socialLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ copyright, socialLinks }) => {
    return (
        <footer>
            <div className="footer-content">
                <p>{copyright}</p>
                <div className="social-links">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;