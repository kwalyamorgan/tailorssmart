import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery() {
  const [images, setImages] = useState<string[]>([])
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    // Dynamically load all images from the gallery folder
    const imageContext = import.meta.glob<{ default: string }>('../gallery/*.jpg', {
      eager: true,
    })

    const loadedImages = Object.values(imageContext)
      .map(m => m.default)
      .sort()

    setImages(loadedImages)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('carousel-container')
    if (!container) return

    const scrollAmount = 320 // card width + gap
    const newPosition = direction === 'left'
      ? Math.max(0, scrollPosition - scrollAmount)
      : scrollPosition + scrollAmount

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    })
    setScrollPosition(newPosition)
  }

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#F5F0E8] to-[#EDE7DA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono-data text-[#C75B3E] text-xs tracking-widest uppercase mb-3">
            Visual Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Gallery
          </h2>
          <p className="text-[#6B6455] max-w-2xl">
            Explore the moments, spaces, and milestones from the TailorSmart Women Empowerment Initiative.
          </p>
        </div>

        {/* Netflix-style Carousel */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-6"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div
            id="carousel-container"
            className="flex gap-4 overflow-x-hidden scroll-smooth pb-4"
          >
            {images.length > 0 ? (
              images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-72 h-80 rounded-lg overflow-hidden group/card cursor-pointer transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-sm">Photo {index + 1}</p>
                    <p className="text-xs text-gray-300">TailorSmart Initiative</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full h-80 flex items-center justify-center text-[#6B6455]">
                <p>Loading gallery...</p>
              </div>
            )}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-6"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicator showing scroll progress */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#6B6455]">
            Showing {Math.min(3, images.length)} of {images.length} images
          </p>
        </div>
      </div>
    </section>
  )
}
