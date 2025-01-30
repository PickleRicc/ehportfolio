'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const ImageModal = ({ image, alt, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          Close
        </button>
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={alt}
            className="object-contain w-full h-full"
            onClick={(e) => e.stopPropagation()}
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
