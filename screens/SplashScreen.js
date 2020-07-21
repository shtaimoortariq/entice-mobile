import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'

// IMPORTS...
import Logo from '../components/Logo'

const { width } = Dimensions.get('window')

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: width / 2 }}>
                <Logo width={'100%'} height={'30%'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
})

export default SplashScreen
