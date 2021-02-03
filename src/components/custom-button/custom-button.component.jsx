import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, fill, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {fill}
            
        </button>
    )
}

export default CustomButton
