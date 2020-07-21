import React from 'react'
import { Image } from 'react-native'

const Logo = ({ height, width }) => {
    return (
        <Image source={require('../assets/logo.png')} style={{ width, height }} />
    )
}

export default Logo

