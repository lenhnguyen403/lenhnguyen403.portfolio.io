import React from 'react'

const LogoSvg = () => {
    return (
        <>
            {/* Hexagon with gradient border */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
                <polygon
                    points="50,2 95,25 95,75 50,98 5,75 5,25"
                    fill="none"
                    stroke="url(#hexGradient)"
                    strokeWidth="4"
                />
                <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fill="url(#hexGradient)"
                    fontSize="42"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                >
                    N
                </text>
            </svg>
        </>
    )
}

export default LogoSvg
