import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ZoomIn, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import {galleryImages} from "../data/GalleryImages.js"

const categories = ['All', 'Inbotics2025', 'Inbotics2024', 'Inbotics2023'];


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter images based on category and search
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      let filtered = galleryImages;
      
      if (activeCategory !== 'All') {
        filtered = filtered.filter(img => img.category === activeCategory);
      }
      
      if (searchTerm) {
        filtered = filtered.filter(img => 
          img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          img.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      setFilteredImages(filtered);
      setIsLoading(false);
    }, 300);
  }, [activeCategory, searchTerm]);

  // Navigate between images in modal
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'Escape':
          setSelectedImage(null);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in">
            Photo Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Explore moments from our robotics workshops, competitions, and innovation showcases. 
            Witness the future of technology being built by passionate minds.
          </p>
          
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Results count */}
          <div className="text-center mt-4">
            <Badge variant="secondary" className="animate-fade-in">
              {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'} found
            </Badge>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[200px] gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xl bg-muted animate-pulse ${
                    i % 3 === 0 ? 'col-span-2 row-span-1' : 
                    i % 4 === 0 ? 'col-span-1 row-span-2' : 
                    'col-span-1 row-span-1'
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-rows-[200px] gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 ${image.gridClass}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <Badge variant="secondary" className="backdrop-blur-sm bg-black/50 text-white border-white/20">
                      {image.category}
                    </Badge>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-white font-semibold text-sm mb-3 line-clamp-2">{image.title}</h3>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="h-8 px-3 backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <ZoomIn className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-xl" />
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* No results message */}
          {!isLoading && filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">No images found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* Navigation buttons */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:scale-110 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:scale-110 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Close button */}
          {/* <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:scale-110 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }} >
            <X className="w-6 h-6" />
          </Button> */}

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center animate-scale-in">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image info overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md rounded-xl p-6 animate-slide-in-bottom">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold text-xl">{selectedImage.title}</h3>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {selectedImage.category}
                    </Badge>
                  </div>
                  <p className="text-white/70 text-sm">
                    Image {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                    onClick={(e) => {
                      e.stopPropagation();
                      const link = document.createElement('a');
                      link.href = selectedImage.src;
                      link.download = `${selectedImage.title}.jpg`;
                      link.click();
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;