import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
        Sign in
            
        </button>
    )
}

export default CustomButton
