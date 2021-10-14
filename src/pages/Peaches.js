import React from 'react';
import HeroSection from '../components/HeroSection';
import ImageGallery from '../components/ImageGallery';
import ImageGrid from '../components/ImageGrid';
import Story from '../components/Story';

export default function Peaches() {
  return (
    <div>
      <HeroSection />
      <Story />
      <ImageGallery />
      <ImageGrid />
    </div>
  );
}
