import React from 'react'
import avatar from '/avatar.jpg'

const heroImage = {
    url: avatar,
    alt: "Le Lenh Nguyen"
}

const HeroCard = ({ src = heroImage.url, alt = heroImage.alt, className }) => {
    return (
        <>
            <img
                src={src}
                alt={alt}
                className={className}
            />
        </>
    )
}

export default HeroCard
