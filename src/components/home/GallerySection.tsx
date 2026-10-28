import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/galleryData';
import { GalleryItem } from '../../types';
import { SmartImage } from '../common/SmartImage';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Operation Theatre', 'ICU & Care', 'Infrastructure', 'Diagnostics', 'Patient Rooms'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold text-sky-800 tracking-wider uppercase block mb-2">
            Hospital Gallery
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Infrastructure & Clinical Care Facility Tour
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Take a visual tour of our modular operation theatres, intensive care unit, clean patient accommodations, and diagnostic suites at Savedi, Ahilyanagar.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto scrollbar-none mb-8 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <SmartImage
                src={item.image}
                alt={item.title}
                aspectRatioClass="aspect-[4/3]"
                fallbackTitle={item.title}
              />
              
              {/* Hover Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] font-semibold text-sky-300 uppercase tracking-wider mb-0.5">
                  {item.category}
                </span>
                <h3 className="text-xs font-bold leading-tight line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center justify-between text-[11px] text-slate-300">
                  <span>View full photograph</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/70 text-white hover:bg-slate-950 transition-colors focus:outline-hidden"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-5 bg-slate-900 text-white">
              <span className="text-xs font-semibold text-sky-400 block mb-1">
                {selectedPhoto.category}
              </span>
              <h3 className="text-lg font-bold">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
