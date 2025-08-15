import React from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
    React.useEffect(() => {
        document.title = title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = description;
            document.head.appendChild(newMetaDescription);
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords);
        } else {
            const newMetaKeywords = document.createElement('meta');
            newMetaKeywords.name = 'keywords';
            newMetaKeywords.content = keywords;
            document.head.appendChild(newMetaKeywords);
        }
    }, [title, description, keywords]);

    return null;
};

export default SEO;