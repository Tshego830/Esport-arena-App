interface ImagePlaceholderProps {
  className?: string;
  label?: string;
}

export default function ImagePlaceholder({ className = "", label }: ImagePlaceholderProps) {
  return (
    <div className={`relative bg-gray-100 border border-gray-300 flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#c4c4c4" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#c4c4c4" strokeWidth="1" />
      </svg>
      {label && (
        <span className="relative z-10 text-xs font-medium text-gray-400 bg-white/80 px-2 py-1 border border-gray-200">
          {label}
        </span>
      )}
    </div>
  );
}
