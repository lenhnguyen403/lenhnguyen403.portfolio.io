import React from 'react'

const HeadingSection = ({ classNameP, classNameH2, children1, children2 }) => {
    return (
        <>
            <p className={classNameP}>
                {children1}
            </p>
            <h2 className={classNameH2}>
                {children2}
            </h2>
        </>
    )
}

export default HeadingSection
