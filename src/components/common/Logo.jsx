import React from 'react'
import logo from '/b63473da-4806-4458-a3dd-d03009605211.png'

const logoImage = {
    url: logo,
    alt: "Logo"
}

const Logo = ({ src = logoImage.url, alt = logoImage.alt, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading='lazy'
        />
    )
}

export default Logo
