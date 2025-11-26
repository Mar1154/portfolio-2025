import { useEffect } from 'react';

const SEO = ({
  title = 'mar',
  description = 'Professional web developer portfolio showcasing projects, services, and expertise in modern web technologies.',
  keywords = 'web developer, portfolio, React, JavaScript, web development, frontend developer',
  author = 'Your Name',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://yourportfolio.com',
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = {
      description,
      keywords,
      author,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:url': ogUrl,
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                  document.querySelector(`meta[property="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }, [title, description, keywords, author, ogImage, ogUrl]);

  return null;
};

export default SEO;
