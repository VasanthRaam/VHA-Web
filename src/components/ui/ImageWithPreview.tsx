import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ImageWithPreviewProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  previewSrc?: string;
}

export function ImageWithPreview({ src, alt, className, previewSrc, ...props }: ImageWithPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={cn("cursor-zoom-in transition-all", className)}
        onClick={() => setIsOpen(true)}
        {...props}
      />
      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute top-6 right-6 text-white hover:opacity-80 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={previewSrc || src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
}
