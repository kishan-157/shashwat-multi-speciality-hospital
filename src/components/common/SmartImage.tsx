import React, { useState } from 'react';
import { Activity, ShieldAlert } from 'lucide-react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt = 'Medical healthcare service',
  fallbackTitle,
  className = '',
  aspectRatioClass = 'aspect-[16/10]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!src || hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-gradient-to-br from-sky-900 via-slate-800 to-sky-950 flex flex-col items-center justify-center p-4 text-center select-none ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sky-300 mb-2 border border-white/10">
          <Activity className="w-6 h-6 animate-pulse" />
        </div>
        <span className="text-xs font-semibold text-white/90 line-clamp-1">
          {fallbackTitle || alt || 'Shashwat Hospital Facility'}
        </span>
        <span className="text-[10px] text-sky-200/70 mt-0.5">
          Clinical Healthcare Facility
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className} bg-slate-100`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center">
          <Activity className="w-6 h-6 text-sky-300 animate-pulse" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        {...props}
      />
    </div>
  );
};
