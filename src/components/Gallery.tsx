
import { useState, useEffect } from 'react';
import { categories, galleryItems } from '@/data/galleryData';
import GalleryHeader from '@/components/gallery/GalleryHeader';
import CategoryFilter from '@/components/gallery/CategoryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import SocialCTA from '@/components/gallery/SocialCTA';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('galeria');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <GalleryHeader isVisible={isVisible} />
        
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          isVisible={isVisible}
        />

        <GalleryGrid 
          items={filteredItems}
          categories={categories}
          isVisible={isVisible}
        />

        <SocialCTA isVisible={isVisible} />
      </div>
    </section>
  );
};

export default Gallery;
