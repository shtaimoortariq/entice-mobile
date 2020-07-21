import React from 'react'
import { StyleSheet, Dimensions, View, Text } from 'react-native'

// IMPORTS...
import FocusButton from '../components/FocusButton'

const { width } = Dimensions.get('window')

const YourAllSetScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center', width: width / 1.4, }}>
                <Text style={{ textAlign: 'center', fontSize: width / 10, color: '#ffff' }}>You`re all set!</Text>
            </View>
            <View style={{ flex: 2 }}>
                <FocusButton text="View your profile" w='60%' minW='60%' mt={'20%'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000'
    },
})

export default YourAllSetScreen
