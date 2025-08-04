interface FluxlyLogoProps {
  className?: string
  showWordmark?: boolean
  size?: "sm" | "md" | "lg"
  textColor?: string
}

export function FluxlyLogo({
  className = "",
  showWordmark = true,
  size = "md",
  textColor = "#333333",
}: FluxlyLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }

  const textSizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`relative ${sizeClasses[size]}`}>
        <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Curved flow line with arrowhead */}
          <path
            d="M8 20C8 20 12 8 20 12C28 16 32 28 24 28C20 28 16 24 20 20C24 16 28 20 26 24"
            stroke="#4ABDAC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Arrowhead */}
          <path
            d="M24 21L26 24L29 21"
            stroke="#4ABDAC"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <span className={`font-sans font-medium ${textSizeClasses[size]} tracking-tight`} style={{ color: textColor }}>
          flu
          <span className="relative">
            x<span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-[#4ABDAC] text-xs">→</span>
          </span>
          ly
        </span>
      )}
    </div>
  )
}
